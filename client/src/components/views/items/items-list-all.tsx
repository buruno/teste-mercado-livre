import { ListItem } from '@sharedTypes/index'
import ItemsResult from './items-list-card'

function ItemsResults({ items }: { items: ListItem[]}) {
  console.log(items)
  return (
    <div>
      {items.length === 0 ?
        <h1 className="text--center">Nenhum resultado encontrado</h1>
        :
        items.map((item)=>{
        return <ItemsResult item={item} />
        })
      }
    </div>
  )
}
export default ItemsResults;