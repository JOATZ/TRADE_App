import React from 'react'

const JsonToTable = ({ data }) => {
    if (!data || !data.transactions || !data.transactions.length) return null

    const headers = Object.keys(data.transactions[0])
    const transactions = data.transactions

    return (
        <table>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction, rowIndex) => (
                    <tr key={rowIndex}>
                        {headers.map((header, index) => (
                            <td key={index}>
                                {typeof transaction[header] === 'object'
                                    ? JSON.stringify(transaction[header])
                                    : transaction[header]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default JsonToTable
