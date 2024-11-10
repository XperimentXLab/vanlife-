//import { useEffect, useState } from "react"
import { Await, Link, useLoaderData, defer } from "react-router-dom"
import { getHostVans } from "../api"
import { AuthRequired } from "../components/AuthRequired"
import { Suspense } from "react"

export async function loader ({ request}) {
  await AuthRequired(request)
  return defer ({ vans: getHostVans()}) 
}

function HostVans () {

  //const [vans, setVans] = useState([])

  /*
  useEffect(()=>{
    fetch("/api/host/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])
  */

  const dataPromise = useLoaderData()
  //console.log(useLoaderData())


  function renderHostVanEl (vans) {
    const vansElement = vans.map(van => (
      <div key={van.id} className="host-van-div">
        <Link to={van.id} >
        <img 
          alt="van_image"
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
      <section>{vansElement}</section>
    )
  }


  return (
    <div className="host-van-div-big">
      <h3>Your list vans</h3>
      <Suspense fallback={
        <h2>Loading....</h2>
      }>
        <Await resolve={dataPromise.vans}>
          {renderHostVanEl}
        </Await>
      </Suspense>

    </div>
  )
}

export default HostVans