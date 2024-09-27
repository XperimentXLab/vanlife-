import Home from './components/Home';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <Link to="/" className='vanlife'>#VANLIFE</Link>
        <div className='nav-tab'>
          <Link to='/about'>About</Link>
        </div>
      </nav>
    </header>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>

    <footer>
      <h5>&copy; 2024 #VANLIFE</h5>
    </footer>
  </BrowserRouter>
  );
}

export default App;
