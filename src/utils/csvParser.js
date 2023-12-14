import Papa from 'papaparse'

const CSVParser = (file) => {
    return new Promise((resolve, reject) => {
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: (results) => {
                const json = {
                    dataType: 'symbolData',
                    name: file.name.split('.')[0],
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
