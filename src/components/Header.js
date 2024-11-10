import { Link, NavLink } from "react-router-dom"

function handleX () {
  localStorage.removeItem("loggedin")
}

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
        <Link
          to='/login'
        ><img 
            alt="avatar_icon"
            className="avatar-icon"
            src={"/images/avatar-icon.png"}
          />
        </Link>
        <button className="x-btn" onClick={handleX}>X</button>
      </div>
    </nav>
  </header>
  )
}

export default Header