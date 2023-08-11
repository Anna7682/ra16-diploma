import { Routes, Route } from 'react-router-dom';
import { Paths } from './Paths';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './components/Pages/HomePage/HomePage';
import { About } from './components/Pages/About/About';
import { ContactsInfo } from './components/Pages/ContactsInfo/ContactsInfo';
import { CatalogSearch } from './components/Pages/CatalogSearch/CatalogSearch';
import { Error404 } from './components/Pages/Error404/Error404';
import { CatalogItem } from './components/Pages/CatalogItem/CatalogItem';
import { Cart } from './components/Main/Cart/Cart';

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
