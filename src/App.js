import Home from './pages/Home';
import {
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider
} from "react-router-dom";
import About from './pages/About';
import Vans, { loader as vansLoader } from './pages/Vans';
import VanDetail, {loader as vansDetailLoader} from './pages/VanDetail';
import Layout from './components/Layout';
import Income from './Host/Income';
import Reviews from './Host/Reviews';
import "./server";
import Dashboard from './Host/Dashboard';
import HostLayout from './components/HostLayout';
import HostVans, {loader as hostVansLoader} from './Host/HostVans';
import HostVansDetail from './Host/HostVansDetail';
import VansDetailLayout, {loader as hostVansDetailLoader} from './components/VansDetailLayout';
import HostDetailsPricing from './Host/HostDetailsPricing';
import HostDetailsPhotos from './Host/HostDetailsPhotos';
import Page404 from './components/Page404';
import Login, { loader as logInLoader, action as logInAction } from './pages/Login';
import { AuthRequired } from './components/AuthRequired';
import Error from './components/Error';
import ReLogin from './components/ReLogin';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} errorElement={<Error />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='login' element={<Login />} 
      loader={logInLoader}
      action={logInAction}
    />
    <Route 
      path='vans' 
      element={<Vans />} 
      loader={vansLoader} 
    />
    <Route path='vans/:id' element={<VanDetail />} 
      loader={vansDetailLoader}
    /> 

    <Route path='host' element={<HostLayout />} 
      errorElement={<ReLogin />}
    >
      <Route index element={<Dashboard />} 
        loader={async ({request}) => await AuthRequired(request)}
      />
      <Route path='income' element={<Income />} 
        loader={async ({request}) => await AuthRequired(request)}
      />
      <Route path='reviews' element={<Reviews />} 
        loader={async ({request}) => await AuthRequired(request)}
      />
      <Route path='vans' element={<HostVans />} 
        loader={hostVansLoader}
      />
      <Route path='vans/:id' element={<VansDetailLayout />}
        loader={hostVansDetailLoader}
        //errorElement={<Error />}
      >
        <Route index element={<HostVansDetail />} 
          loader={async ({request}) => await AuthRequired(request)}
        />
        <Route path='pricing' element={<HostDetailsPricing />} 
          loader={async ({request}) => await AuthRequired(request)}
        />
        <Route path='photos' element={<HostDetailsPhotos />} 
          loader={async ({request}) => await AuthRequired(request)}
        />
      </Route>
    </Route>

    <Route path='*' element={<Page404 />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

//:id = variable of 'id'
// <Layout /> is a nested route element

/*
Nested Route - when to nested or not to nested
TO NESTED = when to keep display some ui on the page, but also want to display more and when to avoid repitition in route paths

*/
