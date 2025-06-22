import { Route, Routes } from 'react-router-dom'
import ShopPage from '../pages/ShopPage';
import SecondPage from '../pages/SecondPage';
import ProductPage from '../pages/ProductPage';
import MobxPage from '../pages/MobxPage';
import ChangeDataBackend from '../pages/ChangeDataBackend';
import MainPage from '../pages/MainPage';
import CreateEditElement from '../components/change-data-backend/CreateEditElement';
import RegistrationPage from '../pages/RegistationPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<ShopPage />} />
      <Route path='/second' element={<SecondPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/mobx' element={<MobxPage />} />

      <Route path="/change-backend" index element={<ChangeDataBackend />} />
      <Route path='/change-backend/new' element={<CreateEditElement />} />
      <Route path='/change-backend/edit/:id' element={<CreateEditElement />} />

      <Route path='/registration' element={<RegistrationPage /> } />

      <Route path='/main' element={<MainPage />} />
    </Routes>
  );
};

export default Router;
