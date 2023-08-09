import { Routes, Route } from 'react-router-dom';
import { Paths } from './ts/Paths';
import { Layout } from './ts/components/Layout/Layout';
import { HomePage } from './ts/components/Pages/HomePage/HomePage';
import { About } from './ts/components/Pages/About/About';
import { ContactsInfo } from './ts/components/Pages/ContactsInfo/ContactsInfo';
import { CatalogSearch } from './ts/components/Pages/CatalogSearch/CatalogSearch';
import { Error404 } from './ts/components/Pages/Error404/Error404';
import { CatalogItem } from './ts/components/Pages/CatalogItem/CatalogItem';
import { Cart } from './ts/components/Main/Cart/Cart';

export const appURL = '/ra16-diploma';
export const serverURL = 'https://ra16-diploma-backend-hk4y.onrender.com';

function App() {
  return (
    <Routes>
      <Route path={Paths.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={Paths.ABOUT} element={<About />} />
        <Route path={Paths.CONTACTS} element={<ContactsInfo />} />
        <Route path={Paths.CATALOG} element={<CatalogSearch />} />
        <Route path={`${Paths.CATALOG}:id`} element={<CatalogItem />} />
        <Route path={Paths.CART} element={<Cart />} />
        <Route path='*' element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
