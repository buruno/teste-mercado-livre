export interface ListItem {
  "id": string,
  "title": string,
  "price": {
    "currency": string,
    "amount": number,
    "decimals": number
  },
  "picture": string,
  "condition": string,
  "free_shipping": boolean
}

export interface GetItem extends ListItem {
  "sold_quantity": number,
  "description": string,
}

export interface ListAllPayload {
  "author": {
    "name": string
    "lastname": string
  },
  "categories": string[],
  items: ListItem[]
}