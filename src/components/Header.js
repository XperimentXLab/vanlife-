import { Link, NavLink } from "react-router-dom"

function Header () {
  return (
    <header>
    <nav>
      <Link to="/" className='vanlife'>#VANLIFE</Link>
      <div className='nav-tab'>
        <NavLink 
          to='/host'
          className={({isActive})=> isActive ? "active-link" : null}
        >Host</NavLink>
        <NavLink 
          to='/vans'
          className={({isActive})=> isActive ? "active-link" : null}
        >Vans</NavLink>
        <NavLink 
          to='/about'
          className={({isActive})=> isActive ? "active-link" : null}
        >About</NavLink>
      </div>
    </nav>
  </header>
  )
}

export default Header