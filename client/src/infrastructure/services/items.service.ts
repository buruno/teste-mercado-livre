import Axios from 'axios'

const listAllItems = function (query: URLSearchParams) {
  return Axios.get('/api/items', {params: {q: query.get('search')}}).then(
    (res) => {
      return res.data
    }
  )
}

const getByIdItems = function (id: string) {
  return Axios.get(`/api/items/${id}`).then(
    (res) => {
      return res.data
    }
  ).catch(
    (err) => {
      throw new Error('Link inválido')
    }
  )
}

export {
  listAllItems,
  getByIdItems
}