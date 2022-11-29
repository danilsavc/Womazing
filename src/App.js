import { Route, Routes } from 'react-router-dom'
import AboutBrand from './Components/AboutBrand';
import Bag from './Components/Bag';
import Contacts from './Components/Contacts';

import Footer from './Components/Footer';
import Home from './Components/Home';
import Layout from './Components/Layout';
import NotFound from './Components/NotFound';
import Privacy from './Components/PublicAndPrivacyPolicy/Privacy';
import Public from './Components/PublicAndPrivacyPolicy/Public';
import Shop from './Components/Shop';

function App() {
  return (
    <>
      <div className="Wrapper">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='privacy-policy' element={<Privacy />} />
            <Route path='public-oferta' element={<Public />} />
            <Route path='about-brand' element={<AboutBrand />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='bag' element={<Bag />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
