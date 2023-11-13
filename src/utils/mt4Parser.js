function mt4Parser(file) {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject('No file provided.')
            return
        }

        var reader = new FileReader()

        reader.onload = function (e) {
            var contents = e.target.result
            var parser = new DOMParser()
            var doc = parser.parseFromString(contents, 'text/html')
            var startParsing = false
            let ticketIndex = -1
            let lastTicketRowFound = false
            let data = []
            let headers = []

            var tds = doc.getElementsByTagName('td')
            for (let td of tds) {
                var text = td.textContent.trim()
                if (text === 'Ticket') {
                    startParsing = true
                    ticketIndex = Array.from(td.parentNode.children).indexOf(td)
                    console.log('Setting ticketIndex to:', ticketIndex)
                }

                if (startParsing) {
                    var row = []
                    var tr = td.closest('tr')

                    if (!tr.classList.contains('parsed')) {
                        tr.classList.add('parsed')
                        var tdsInRow = tr.getElementsByTagName('td')
                        for (let tdInRow of tdsInRow) {
                            text = tdInRow.textContent.trim()
                            row.push(text)
                        }
                        if (
                            ticketIndex !== -1 &&
                            row[ticketIndex] !== 'Ticket' &&
                            (isNaN(row[ticketIndex]) || row[ticketIndex] === '')
                        ) {
                            lastTicketRowFound = true
                        }
                        if (!lastTicketRowFound) {
                            if (
                                row.length > 0 &&
                                !(
                                    row.some(
                                        (item) =>
                                            item.toLowerCase() === 'balance' ||
                                            item.toLowerCase() === 'commission'
                                    ) && row[0] !== 'Ticket'
                                )
                            ) {
                                data.push(row)
                            }
                        }
                    }
                }

                if (lastTicketRowFound) break
            }

            // Create a new table element
            var table = document.createElement('table')
            // Iterate over each row of data
            for (let i = 0; i < data.length; i++) {
                // Create a new table row element
                var tr = document.createElement('tr')
                //this loop established first parse as the headers, then the rest as trade-data
                if (i === 0) {
                    tr.classList.add('header-col') //add class to header col
                    //stored header names into var for tagging later
                    headers = data[i].map((header) =>
                        header
                            .toLowerCase()
                            .replace(/ /g, '')
                            .replace(/\//g, '')
                    )
                } else {
                    tr.classList.add('trade-data') //add class to the rest
                }
                // Iterate over each cell in the row, j is cell, i is row
                for (let j = 0; j < data[i].length; j++) {
                    // Create a new table data element
                    var td = document.createElement('td')
                    //don't wrap cell text
                    td.style.whiteSpace = 'nowrap'
                    // Set the text content of the table data element to the cell data
                    td.textContent = data[i][j]
                    //add column class tag to each cell for column manipulation
                    td.classList.add(headers[j])
                    // Append the table data element to the table row
                    tr.appendChild(td)
                }
                // Append the table row element to the table
                table.appendChild(tr)
            }
            // Resolve the promise with the outer HTML of the table
            resolve(table.outerHTML)
        }
        reader.onerror = reject
        reader.readAsText(file)
    })
}

export default mt4Parser
