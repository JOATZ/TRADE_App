import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

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
            let data = []
            let headers = []
            let dateTimeNow = new Date()
            let dateString = dateTimeNow.toLocaleDateString() // e.g. "12/31/2021"
            let timeString = dateTimeNow.toLocaleTimeString() // e.g. "12:59:59 PM"
            let account = null
            let name = null
            let currency = null
            let statementDate = null

            var trs = doc.getElementsByTagName('tr')

            function mapCellToHeader(cell, index) {
                let obj = {}
                obj[headers[index]] = cell
                return obj
            }

            for (let i = 0; i < trs.length; i++) {
                let tr = trs[i]
                let tds = tr.getElementsByTagName('td')

                if (i === 0) {
                    account = tds[0].textContent.split(':')[1].trim()
                    name = tds[1].textContent.split(':')[1].trim()
                    currency = tds[2].textContent.split(':')[1].trim()
                    statementDate = dayjs(
                        tds[4].textContent.trim(),
                        'YYYY MMMM D, HH:mm'
                    ).toDate()
                    continue
                }

                if (i === 1) {
                    continue
                }

                if (i === 2) {
                    headers = Array.from(tds).map((td) =>
                        td.textContent.trim().toLowerCase()
                    )
                    startParsing = true
                    continue
                }

                if (startParsing) {
                    let row = Array.from(tds).map((td) => td.textContent.trim())
                    let colspan = tds[0].getAttribute('colspan')

                    if (colspan === '9') {
                        let magic = row[1]
                        let comments = row[2]
                        data[data.length - 1].magic = magic
                        data[data.length - 1].comments = comments
                        continue
                    }

                    let obj = row.reduce((acc, cell, j) => {
                        return { ...acc, ...mapCellToHeader(cell, j) }
                    }, {})
                    if (obj.type !== 'balance') {
                        data.push(obj)
                    }
                }
            }
            var json = {
                dataType: 'tradeData',
                account: account,
                name: name,
                currency: currency,
                date: dateString,
                time: timeString,
                statementDate: statementDate,
                numTrades: data.length,
                transactions: data
            }
            resolve(json)
        }
        reader.onerror = reject
        reader.readAsText(file)
    })
}

export default mt4ToJSON
