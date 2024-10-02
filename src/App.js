import Home from './components/Home';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from './components/About';
import Vans from './components/Vans';

import "./server";
import VanDetail from './components/VanDetail';

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <Link to="/" className='vanlife'>#VANLIFE</Link>
        <div className='nav-tab'>
          <Link to='/vans'>Vans</Link>
          <Link to='/about'>About</Link>
        </div>
      </nav>
    </header>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/vans' element={<Vans />} />
      <Route path='/vans/:id' element={<VanDetail />} /> 
    </Routes>

    <footer>
      <h5>&copy; 2024 #VANLIFE</h5>
    </footer>
  </BrowserRouter>
  );
}

export default App;

//:id = variable of 'id'
