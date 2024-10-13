import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function VanDetail () {

  const [van, setVan] = useState(null)
  const params = useParams() //the params take : in link api to be the object name
  useEffect(()=>{
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  },[params.id])

  return (
    <div>
      {van ? (
        <div key={van.id} className="vandetail-div">
          <h3>{van.name}</h3>
          <img src={van.imageUrl} alt="Van Image"></img>
          <div className="vandetail-more">
            <span>Price: ${van.price}/day</span>
            <i className={`vans-${van.type}`}>{van.type}</i>
            <p>{van.description}</p>
          </div>
          <button className="home-find-btn">Rent this van</button>
        </div>
      ) : <h2>Page Loading....</h2>}
    </div>
  )
}

export default VanDetail