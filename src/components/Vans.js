import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Vans () {

  const [vans, setVans] = useState([])
  
  useEffect(()=> {
    fetch("/api/vans").then(res => res.json()).then(data => setVans(data.vans))
  }, [])
  
  const vanElement = vans.map(van => (
    <div key={van.id} className="vans-div">
      <h3>{van.name}</h3>
      <Link to={`/vans/${van.id}`} style={{textDecoration: 'none'}}>
        <img src={van.imageUrl} className="vans-img" alt="Van Image"></img>
      </Link>
      <div className="vans-info">
        <p>Price: ${van.price}/day</p>
        <i className={`vans-${van.type}`}>{van.type}</i>
      </div>
    </div>
  ))

  return (
    <div className="vans-div-big">
      <h2>Explore our van options</h2>
      <div className="van-list">
        {vanElement}
      </div>
    </div>
  )
}

export default Vans