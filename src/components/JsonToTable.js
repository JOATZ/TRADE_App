import React, { useMemo } from 'react'
import { useSortBy, useTable } from 'react-table'

const JsonToTable = ({ data }) => {
    const transactions = useMemo(
        () => (data && data.transactions ? data.transactions : []),
        [data]
    )
    const headers = useMemo(
        () =>
            transactions.length > 0
                ? Object.keys(transactions[0]).map((header) => ({
                      Header: header,
                      accessor: header
                  }))
                : [],
        [transactions]
    )

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns: headers, data: transactions }, useSortBy)

    if (transactions.length === 0) return null

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th
                                {...column.getHeaderProps(
                                    column.getSortByToggleProps()
                                )}
                            >
                                {column.render('Header')}
                                <span>
                                    {column.isSorted
                                        ? column.isSortedDesc
                                            ? ' 🔽'
                                            : ' 🔼'
                                        : '↕'}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}>
                                    {typeof cell.value === 'object'
                                        ? JSON.stringify(cell.value)
                                        : cell.value}
                                </td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default JsonToTable
