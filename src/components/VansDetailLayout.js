import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"

function VansDetailLayout () {

  const [vans, setVans] = useState([])
  const params = useParams()

  useEffect(()=>{
    fetch(`/api/host/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [params.id])

  const vanDetailElement = vans.map(van =>(
    <div style={{marginTop: 10}}>
      <Link to='..' relative="path">
        <span className="host-vandetail-back">&#8592; Back to all vans</span>
      </Link>
      <div className="host-vandetail-div-big">
        <div key={van.id} className="host-vandetail-div-small">
          <img alt="van_image"
            className="host-vandetail-img"
            src={van.imageUrl} />
          <div style={{paddingLeft: 10}}>
            <i className={`vans-${van.type}`}>{van.type}</i>
            <h3 className="host-vandetail-div-small-h3">{van.name}</h3>
            <span className="host-vandetail-div-small-span">${van.price}/day</span>
          </div>
        </div>
        <nav className="host-vandetail-nav">
          <NavLink to={`.`}
            end
            className={({isActive})=> isActive ? "active-link" : null}
          >Details</NavLink>
          <NavLink to={`pricing`}
            className={({isActive})=> isActive ? "active-link" : null}
          >Pricing</NavLink>
          <NavLink to={`photos`}
            className={({isActive})=> isActive ? "active-link" : null}
          >Photos</NavLink>
        </nav>
        <Outlet context={{vans}}/>
      </div>
    </div>
  ))

  return (
    <div>
      {vanDetailElement}
    </div>   
  )
}

export default VansDetailLayout

/*
useOutletContext = a hook in React Router DOM that allows you to access the context passed to the outlet. Think of it like a way to share data between a parent route and its child routes.
*/