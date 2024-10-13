import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from './pages/About';
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';
import Layout from './components/Layout';
import Income from './Host/Income';
import Reviews from './Host/Reviews';
import "./server";
import Dashboard from './Host/Dashboard';
import HostLayout from './components/HostLayout';
import HostVans from './Host/HostVans';
import HostVansDetail from './Host/HostVansDetail';
import VansDetailLayout from './components/VansDetailLayout';
import HostDetailsPricing from './Host/HostDetailsPricing';
import HostDetailsPhotos from './Host/HostDetailsPhotos';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='vans' element={<Vans />} />
        <Route path='vans/:id' element={<VanDetail />} /> 

        <Route path='host' element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='income' element={<Income />} />

          <Route path='vans' element={<HostVans />} />
          <Route path='vans/:id' element={<VansDetailLayout />}>
            <Route index element={<HostVansDetail />} />
            <Route path='pricing' element={<HostDetailsPricing />} />
            <Route path='photos' element={<HostDetailsPhotos />} />
          </Route>
          
          <Route path='reviews' element={<Reviews />} />
        </Route>

      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

//:id = variable of 'id'
// <Layout /> is a nested route element

/*
Nested Route - when to nested or not to nested
TO NESTED = when to keep display some ui on the page, but also want to display more and when to avoid repitition in route paths

*/
