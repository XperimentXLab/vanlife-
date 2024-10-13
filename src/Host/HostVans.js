import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function HostVans () {

  const [vans, setVans] = useState([])

  useEffect(()=>{
    fetch("/api/host/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])

  const vansElement = vans.map(van => (
      <div key={van.id} className="host-van-div">
        <Link to={`/host/vans/${van.id}`} >
        <img 
          alt="van image"
          className="host-van-img"
          src={van.imageUrl}
        /></Link>
        <div className="host-van-div-small">
          <h4>{van.name}</h4>
          <span>${van.price}/day</span>
        </div>
      </div>
    )
    
  )

  return (
    <div className="host-van-div-big">
      <h3>Your list vans</h3>
      {
        vans.length > 0 ? (
          <section>{vansElement}</section>
      ) : (<h3>Loading your vans....</h3>)}
    </div>
  )
}

export default HostVans