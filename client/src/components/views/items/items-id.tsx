import { GetItem } from '@sharedTypes/index'

function ItemsId({ item }: { item: GetItem }) {
  function showPrice() {
    if (item.price.decimals > 0) {
      const splitted = item.price.amount.toLocaleString('pt-BR').split(',')
      return <>{splitted[0]}<sup>{splitted[1]}</sup></>
    } else {
      return item.price.amount.toLocaleString('pt-BR')
    }
  }
  return (
    <article className='items-id_component'>
      <figure>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          style={{ backgroundImage: `url(${item.picture}` }}
          alt={item.title}
        />
        <figcaption>
          <p>{item.condition} - {item.sold_quantity > 0 ? item.sold_quantity : 'Nenhum'} vendido{item.sold_quantity > 1 &&('s')}</p>
          <h1>{item.title}</h1>
          <h2>
            $ {showPrice()}
          </h2>
        </figcaption>
      </figure>
      <section>
        <h3>Descrição do produto</h3>
        <pre>{item.description}</pre>
      </section>
    </article>
  )
}
export default ItemsId;