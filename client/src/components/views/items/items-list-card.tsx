import { ListItem } from '@sharedTypes/index'
import IconTruck from 'assets/img/icons/icon-truck.svg'
import {Link} from 'react-router-dom'

function ItemsListCard({ item }: { item: ListItem}) {
  return (
    <article className='items-card_component'>
      <figure>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          style={{backgroundImage: `url(${item.picture}`}}
          alt={item.title}
        />
      </figure>
      <div>
        <h1>
          ${`${item.price.amount.toLocaleString('pt-BR',{style: 'currency', currency: item.price.currency})}`}
          {
            item.free_shipping && (
              <figure>
                <img src={IconTruck} alt="Frete grátis" title="Frete grátis" />
              </figure>
            )
          }
        </h1>
        <h2><Link to={`/items/${item.id}`} title={item.title}>{item.title}</Link></h2>
      </div>
    </article>
  )
}
export default ItemsListCard;