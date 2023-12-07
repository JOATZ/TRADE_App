import Papa from 'papaparse'

const CSVParser = (file) => {
    return new Promise((resolve, reject) => {
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: (results) => {
                const json = {
                    dataType: 'symbolData',
                    symbol: file.name.split('.')[0], // Assuming the file name is 'symbol.csv'
                    timeframe: '',
                    dateRange: '',
                    source: '',
                    symbolData: results.data
                }
                resolve(json)
            },
            error: (error) => {
                reject('Error:', error)
            }
        })
    })
}

export default CSVParser
