import { tableHeaders } from './Table'

export const placeholders = tableHeaders.reduce((placeholders, header) => {
  placeholders[header.accessor] = header.Header;
  return placeholders;
}, {});

export const sendButton = 'SEND'
