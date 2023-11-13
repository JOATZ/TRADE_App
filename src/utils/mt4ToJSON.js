function mt4ToJSON(file) {
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
            let dateTimeNow = new Date()
            let dateString = dateTimeNow.toLocaleDateString() // e.g. "12/31/2021"
            let timeString = dateTimeNow.toLocaleTimeString() // e.g. "12:59:59 PM"

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

            // Convert the data to a JSON object
            var transactions = data
                .map((row, i) => {
                    if (i === 0) {
                        headers = row.map((header) =>
                            header
                                .toLowerCase()
                                .replace(/ /g, '')
                                .replace(/\//g, '')
                        )
                        return null
                    } else {
                        var obj = {}
                        row.forEach((cell, j) => {
                            obj[headers[j]] = cell
                        })
                        return obj
                    }
                })
                .filter((item) => item !== null)

            // Create the final JSON object
            var json = {
                date: dateString,
                time: timeString,
                numTrades: transactions.length,
                transactions: transactions
            }

            // Resolve the promise with the JSON object
            resolve(json)
        }
        reader.onerror = reject
        reader.readAsText(file)
    })
}

export default mt4ToJSON
