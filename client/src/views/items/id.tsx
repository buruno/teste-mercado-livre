import { getByIdItems } from 'infrastructure/services/items.service'
import { useParams } from 'react-router-dom'
import { useAsync } from 'react-async-hook';
import ItemsId from 'components/views/items/items-id'
import Spinner from 'components/spinner/spinner'
import { Helmet } from 'react-helmet';

const getResult = async (id: string) => { return await getByIdItems(id) }

function ItemsList() {
  const id = useParams()['id'];
  if (!id) {
    return (
      <main className="view">
        <h1>Invalid ID</h1>
      </main>
    )
  }
  const asyncComponent = useAsync(getResult, [id])
  return (
    <div className="container">

      {asyncComponent.loading && <Spinner />}
      {asyncComponent.error && <main className="view"><h1>{asyncComponent.error.message}</h1></main>}
      {asyncComponent.result && (
        <main className="view">
          <Helmet>
            <title>{asyncComponent.result.item.title} - Mercado Livre</title>
          </Helmet>
          <ItemsId item={asyncComponent.result.item} />
        </main>
      )}
    </div>
  )
}
export default ItemsList;