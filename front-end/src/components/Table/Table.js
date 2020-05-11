import React, { useMemo } from 'react'
import { shape, arrayOf, string, number } from 'prop-types'
import { useTable } from 'react-table'
import { tableHeaders } from 'constants/Table'

const propTypes = {
  rowData: arrayOf(
    shape(
      tableHeaders.reduce((dataShape, header) => {
        dataShape[header.accessor] = header.accessor !== 'participation'
          ? string.isRequired
          : number.isRequired;
        return dataShape;
      }, {})
    )
  ),
}

const Table = ({ rowData }) => {
  const data = useMemo(
    () => rowData,
    [rowData]
  )

  const columns = useMemo(
    () => tableHeaders,
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

Table.propTypes = propTypes

export { Table }
