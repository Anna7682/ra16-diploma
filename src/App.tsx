import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/style.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Error404 from './components/Error404/Error404';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Catalog from './components/Catalog/Catalog';
import MainPage from './components/MainPage/MainPage';
import ProductCard from './components/ProductCard/ProductCard';
import Cart from './components/Cart/Cart';

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
