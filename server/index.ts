const express = require('express');
const Axios = require('axios')

import { ListAllPayload, ListItem, GetItem} from '../types'

const app = express();
const port = process.env.PORT || 5000;

function convertToTypedItem (item, description) {
  const typedItem: GetItem | ListItem = {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id || item.prices.presentation.display_currency,
      amount: item.price,
      decimals: (item.price.toString().split('.')[1] || []).length
    },
    picture: item.pictures ? item.pictures[0].url : item.thumbnail,
    condition: item.condition === 'not_specified' ? null : (item.condition === 'new' ? 'novo' : 'usado'),
    free_shipping: item.shipping.free_shipping,
    sold_quantity: item.sold_quantity,
    description: description
  }
  return typedItem
}

app.get(`/api/items`, (req, res) => {
  Axios.get(`https://api.mercadolibre.com/sites/MLA/search`, {params: { q: req.query.q}}).then(
    (r) => {
      let categories = new Array()
      let items = new Array()
      const results = r.data.results.splice(0, 4)
      for (const filter of r.data.available_filters) {
        if (filter.id === 'category') {
          categories = filter.values.map((item)=>{
            return item.name
          })
        }
      }
      items = results.map(convertToTypedItem)

      const payload: ListAllPayload = {
        author: {
          name: 'Bruno',
          lastname: 'Ishikawa'
        },
        categories,
        items
      }
      res.send(payload)
    }
  )
})

app.get(`/api/items/:id`, (req, res) => {
  Axios.get(`https://api.mercadolibre.com/items/${req.params.id}`).then(
    async (r) => {
      const description = await Axios.get(`https://api.mercadolibre.com/items/${req.params.id}/description`)
      const item = convertToTypedItem(r.data, description.data.plain_text)
      const payload = {
        author: {
          name: 'Bruno',
          lastname: 'Ishikawa'
        },
        item
      }
      res.send(payload)
    }
  ).catch(
    () => {
      res.status(500).send('Produto não encontrado')
    }
  )
})

app.listen(port, () => console.log(`Listening on port ${port}`));
