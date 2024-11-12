//import { useEffect, useState } from "react"
import { Await, defer, Link, useLoaderData, useLocation } from "react-router-dom"
import { getVan } from "../api"
import { Suspense } from "react"

//const params = useParams() //the params take : in link api to be the object name

export function loader ({ params }) {
  return defer ({ vans: getVan(params.id) })
}

function VanDetail () {

  const location = useLocation()
  //const [van, setVan] = useState(null)

  const dataPromise = useLoaderData()

  /*
  useEffect(()=>{
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  },[params.id])
  */

  const search = location.state?.search || ""; //This code tries to get the `search` property from `location.state`. If `location.state` or `location.state.search` is undefined, it falls back to an empty string. 
  //This line retrieves the search parameter from the location state if it exists, or defaults to an empty string if it doesn’t.
  //The ?. operator is called optional chaining. It means that if location.state is null or undefined, it won’t throw an error. Instead, it will just return undefined.
  const type = location.state?.type || "all";

  function renderVanDetailEl (vans) {
    return (
      <div className="vandetail-biggest-div">
      <Link 
        to={`..${search}`} //This part creates a link. The ..${search} navigates up one level in the route hierarchy and appends any search parameters.
        relative="path">
        <span className="host-vandetail-back">&#8592; Back to {type} vans</span>
      </Link>
      <div key={vans.id} className="vandetail-div">
        <h3>{vans.name}</h3>
        <img src={vans.imageUrl} alt="van_image"></img>
        <div className="vandetail-more">
          <span>Price: ${vans.price}/day</span>
          <i className={`vans-${vans.type}`}>{vans.type}</i>
          <p>{vans.description}</p>
        </div>
        <button className="home-find-btn">Rent this van</button>
      </div>
    </div>
    )
  }

  return (
    <Suspense fallback={
      <h2>Loading....</h2>
    }>
      <Await resolve={dataPromise.vans}>
        {renderVanDetailEl}
      </Await>
    </Suspense>
  )
}

export default VanDetail

/*

History State = like useState but in React that can be used across browser
state={{        xxxxx      :          xxxx      }}
        name of the state    value of the state
  - useLocation = a hook from React Router that provides information about the current URL location. It returns an object that contains properties like pathname, search, hash, etc. This can be super useful when you need to access the URL or perform navigation-related tasks.

*/