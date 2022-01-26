import {
  Routes,
  Route
} from "react-router-dom";
import Home from 'views/home'
import ItemsList from 'views/items/list'
import ItemsId from 'views/items/id'

function Router(): React.ReactElement {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="items">
        <Route index element={<ItemsList />} />
        <Route path=":id" element={<ItemsId />} />
      </Route>
    </Routes>
  )
};

export default Router