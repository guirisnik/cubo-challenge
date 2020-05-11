import axios from 'axios'

const usePerson = () => {
  const createPerson = async (person) => {
    let response = await axios.request({
      method: 'POST',
      baseURL: process.env.API_GATEWAY,
      url: '/create/person',
      data: person,
    })

    return response.status === 201;
  }

  const readAll = async () => {
    let response = await axios.request({
      method: 'GET',
      baseURL: process.env.API_GATEWAY,
      url: '/read/all',
    })

    return response.status === 200 ? response.data.data : [];
  }

  const deleteAll = async () => {
    let response = await axios.request({
      method: 'DELETE',
      baseURL: process.env.API_GATEWAY,
      url: '/delete/all',
    })

    return response.status === 200;
  }

  return { createPerson, readAll, deleteAll }
}

export { usePerson }