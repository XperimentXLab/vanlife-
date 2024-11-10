//import { useEffect, useState } from "react"
import { Await, defer, Link, useLoaderData, useSearchParams } from "react-router-dom"
import { getVans } from "../api"
import { Suspense } from "react"

export function loader() {
  //throw new Error()  // a hardcode error
  return defer ({ vans: getVans() })
}
//defer = to postpone its loading until it's absolutely needed. This improves performance and user experience by avoiding unnecessary data fetching upfront.

function Vans () {

  //const [vans, setVans] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  //const [loading, setLoading] = useState(false)
  //const [error, setError] = useState(null)

  const dataPromise = useLoaderData() //getting loader props

  const typeFilter = searchParams.get("type")
  
  /*
  useEffect(()=> {

    //fetch("/api/vans").then(res => res.json()).then(data => setVans(data.vans))

    async function loadVans() {
      setLoading(true)
      try {
        const data = await getVans()
        setVans(data)
      } catch(err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadVans()
  }, [])
  */

  //Merging search params with Links
  /*
  function genNewSearchParamsString (key, value) {
    const sp = new URLSearchParams(searchParams)
    if (value === null) {
      sp.delete(key)
    } else {
      sp.set(key, value)
    }
    return `?${sp.toString()}`
  }
  
  function handleFilterChange (key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  if (loading) {
    return <h2>Loading....</h2>
  }

  if (error) {
    return <h2>There is an error: {error.message}</h2>
  }
  */

  function renderVanEl (vans) {
        
    const filteredType = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter) : vans

    const vanElement = filteredType.map(van => (
      <div key={van.id} className="vans-div">
        <h3>{van.name}</h3>
        <Link 
          to={`/vans/${van.id}`} 
          style={{textDecoration: 'none'}}
          state={{
            search: `?${searchParams.toString()}`,
            type: typeFilter
          }} //History State (refer VansDetail.js)
        >
          <img src={van.imageUrl} className="vans-img" alt="van_image"></img>
        </Link>
        <div className="vans-info">
          <p>Price: ${van.price}/day</p>
          <i className={`vans-${van.type}`}>{van.type}</i>
        </div>
      </div>
    ))

    return (
      <>
        <div>
        {/*<Link 
          to='.'
          to={genNewSearchParamsString("type", null)}
        >*/}
          <button
            className={ typeFilter === null ? "vans-type-all" : "vans-type"}
            onClick={()=> setSearchParams({})}
            //onClick={()=>handleFilterChange("type, null)} 
          >All</button>
        {/*<Link 
          to="?type=simple"
          to={genNewSearchParamsString("type", "simple")}
        >*/}
          <button 
            className={ typeFilter === "simple" ? "vans-simple" : "vans-type"}
            onClick={()=> setSearchParams({type: "simple"})}
            //onClick={()=>handleFilterChange("type, "simple")}
          >Simple</button>
        {/*<Link 
          to="?type=rugged"
          to={genNewSearchParamsString("type", "rugged")}
        >*/}
          <button 
            className={ typeFilter === "rugged" ? "vans-rugged" : "vans-type"}
            onClick={()=> setSearchParams({type: "rugged"})}
            //onClick={()=>handleFilterChange("type, "rugged")}
          >Rugged</button>
        {/*<Link 
          to="?type=luxury"
          to={genNewSearchParamsString("type", "luxury")}
        >*/}
          <button 
            className={ typeFilter === "luxury" ? "vans-luxury" : "vans-type"}
            onClick={()=> setSearchParams({type: "luxury"})}
            //onClick={()=>handleFilterChange("type, "luxury")}
          >Luxury</button>
      </div>

      <div className="van-list">
        {vanElement}
      </div>
    </>
    )
  }


  return (
    <div className="vans-div-big">
      <h2>Explore our van options</h2>
      <Suspense fallback={<h2>Loading....</h2>}>
        <Await resolve={dataPromise.vans}>
          {renderVanEl}
        </Await>
      </Suspense>
    </div>
  )
}

export default Vans

/*
Query parameters 
  1) represent changes in UI
    - sorting, filtering, pagination
  
  2) used as a "single source of truth" for certain apps state
    - ask yourself "should user able to revisit or share this page just like this?" If "yes", then might consider `raising that state up` to URL in query parameter

  # Key/value pairs in URL
  # Begins with ? == 1 filter
    - /vans?type=rugged
    - /vans?type=simple
  # Seperated by & == 2 filter
    - /vans?type=rugged&filterBy=price

  A) useSearchParams() = hook from React Router DOM allows you to work with query string parameters in a URL. It simplifies the process of reading and updating the query strings in your React applications
   -  use searchParams.get('key') to access specific parameters and setSearchParams to update them.

Caveats to setting params = URL cannot have error or animoli


*/