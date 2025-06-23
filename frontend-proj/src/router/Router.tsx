import { Route, Routes } from 'react-router-dom'
import ShopPage from '../pages/ShopPage';
import SecondPage from '../pages/SecondPage';
import ProductPage from '../pages/ProductPage';
import MobxPage from '../pages/MobxPage';
import ChangeDataBackend from '../pages/ChangeDataBackend';
import MainPage from '../pages/MainPage';
import CreateEditElement from '../components/change-data-backend/CreateEditElement';
import RegistrationPage from '../pages/RegistationPage';
import ProductAdd from '../pages/ProductAdd';
import CreateEditProduct from '../components/change-data-backend/CreateEditProduct';


const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<ShopPage />} />
      <Route path='/second' element={<SecondPage />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/mobx' element={<MobxPage />} />

      <Route path="/change-backend" index element={<ChangeDataBackend />} />
      <Route path='/change-backend/new' element={<CreateEditElement />} />
      <Route path='/change-backend/edit/:id' element={<CreateEditElement />} />

      <Route path='/registration' element={<RegistrationPage /> } />

      <Route path='/product-add' element={<ProductAdd /> }/>
      <Route path='/product-add/new' element={<CreateEditProduct />} />
      <Route path='/product-add/edit/:id' element={<CreateEditProduct />} />

      <Route path='/main' element={<MainPage />} />
    </Routes>
  );
};

export default Router;
