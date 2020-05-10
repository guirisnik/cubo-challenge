import React from 'react'
import { Table } from 'components/Table'

const testData = [
  {
    'firstName': 'Jane',
    'lastName': 'Doe',
    'participation': '50',
  },
  {
    'firstName': 'Foo',
    'lastName': 'Bar',
    'participation': '50',
  },
]

const rowData = testData;

const Page = () => {
  return (
    <Table rowData={rowData} />
  )
}

Page.displayName = 'Playground'

export default Page
