//import { useEffect, useState } from "react"
import { Await, defer, Link, NavLink, Outlet, useLoaderData, useParams } from "react-router-dom"
import {AuthRequired }from './AuthRequired'
import { getVans } from "../api"
import { Suspense } from "react"

export async function loader({params, request}) {
  await AuthRequired(request)
  return defer ({ vans: getVans(params.id) })
}

function VansDetailLayout () {

  /*
  const [vans, setVans] = useState([])
  const params = useParams()

  useEffect(()=>{
    fetch(`/api/host/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [params.id])
  */

  const dataPromise = useLoaderData()

  function renderVanDetailLayEl (vans) {
    return (
      <div style={{marginTop: 10}}>
        <Link to='..' relative="path">
          <span className="host-vandetail-back">&#8592; Back to all vans</span>
        </Link>
        <div className="host-vandetail-div-big">
          <div key={vans.id}    
            className="host-vandetail-div-small"
          >
            <img alt="van_image"
              className="host-vandetail-img"
              src={vans.imageUrl} />
            <div style={{paddingLeft: 10}}>
              <i className={`vans-${vans.type}`}>{vans.type}</i>
              <h3 className="host-vandetail-div-small-h3">{vans.name}</h3>
              <span className="host-vandetail-div-small-span">${vans.price}/day</span>
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
    )
  }

  return (
    <Suspense fallback={<h2>Loading....</h2>}>
      <Await resolve={dataPromise.vans}>
        {renderVanDetailLayEl}
      </Await>
    </Suspense>
  )

}

export default VansDetailLayout

/*
useOutletContext = a hook in React Router DOM that allows you to access the context passed to the outlet. Think of it like a way to share data between a parent route and its child routes.
*/