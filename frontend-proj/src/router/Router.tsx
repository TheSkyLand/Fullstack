import { Route, Routes } from 'react-router-dom'
import ShopPage from '../pages/ShopPage';

import MainPage from '../pages/MainPage';

import ProductAdd from '../pages/ProductAdd';
import CreateEditProduct from '../components/change-data-backend/CreateEditProduct';


const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<ShopPage />} />

      <Route path='/product-add' element={<ProductAdd /> }/>
      <Route path='/product-add/new' element={<CreateEditProduct />} />
      <Route path='/product-add/edit/:id' element={<CreateEditProduct />} />

      

      <Route path='/main' element={<MainPage />} />
    </Routes>
  );
};

export default Router;
