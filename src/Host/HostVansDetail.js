//import { useEffect, useState } from "react"
//import { Outlet, useParams } from "react-router-dom"

import { useOutletContext } from "react-router-dom" //It allows to share data between the parent and child routes without having to pass props manually all the time.

/*
export async function loader ({ request }) {
  await AuthRequired (request)
  return defer ({ vans: getHostVans()}) 
}
  */

function HostVansDetail () {
  /*
  const [vans, setVans] = useState([])
  const params = useParams()

  useEffect(()=>{
    fetch(`/api/host/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVans(data.vans))
  },[params.id])
  */

  const { vans } = useOutletContext()
  //const dataPromise = useLoaderData()

  //function renderHostVanDetailEl (vans) {
  return (
    <div className="host-vandetails-div" key={vans.id}>
        <p><b>Name:</b> {vans.name}</p>
        <p><b>Category:</b> {vans.type}</p>
        <p><b>Description:</b> {vans.description}</p>
        <p><b>Visibilty:</b> Public</p>
      </div>
  )

  /*
  return (
    <Suspense fallback={<h2>Loading....</h2>}>
      <Await resolve={dataPromise.vans}>
        {renderHostVanDetailEl}
      </Await>
    </Suspense>
  )
  */
}


export default HostVansDetail