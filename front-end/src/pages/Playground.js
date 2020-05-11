import React, { useState, useEffect } from 'react'
import { Table } from 'components/Table'
import { usePerson } from 'hooks/usePerson'

const Page = () => {
  const { readAll } = usePerson();
  const [rowData, setRowData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const rowData = await readAll();
      setRowData(rowData);
    }

    fetchData();
  }, []);

  return (
    <Table rowData={rowData} />
  )
}

Page.displayName = 'Playground'

export default Page
