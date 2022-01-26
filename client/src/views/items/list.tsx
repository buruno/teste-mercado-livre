import { listAllItems } from 'infrastructure/services/items.service'
import { useSearchParams} from 'react-router-dom'
import { useAsync } from 'react-async-hook';
import ItemsListAll from 'components/views/items/items-list-all'
import Spinner from 'components/spinner/spinner'
import { Helmet } from 'react-helmet';

const getResults = async (query: URLSearchParams) => { return await listAllItems(query) }

function ItemsList() {
  const query = useSearchParams()[0];
  const asyncComponent = useAsync(getResults, [query])
  return (
    <div className="container">
      {asyncComponent.loading && <Spinner />}
      {asyncComponent.error && <div>Error: {asyncComponent.error.message}</div>}
      {asyncComponent.result && (
        <main className="view">
          <Helmet>
            <title>Resultados para "{query.get('search')}" - Mercado Livre</title>
          </Helmet>
          <ItemsListAll items={asyncComponent.result.items} />
        </main>
      )}
    </div>
  )
}
export default ItemsList;