//import { useEffect, useState } from "react"
//import { Outlet, useParams } from "react-router-dom"

import { useOutletContext } from "react-router-dom"

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

  const { vans }= useOutletContext()

  const vandetailElement = vans.map(van => {
    return (
      <div> 
        <p><b>Name:</b> {van.name}</p>
        <p><b>Category:</b> {van.type}</p>
        <p><b>Description:</b> {van.description}</p>
        <p><b>Visibilty:</b> Public</p>
      </div>
    )
  })
  
  
  return (
    <div className="host-vandetails-div">
      {vandetailElement}
    </div>
  )
}

export default HostVansDetail