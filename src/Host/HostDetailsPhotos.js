import { useOutletContext } from "react-router-dom"

function HostDetailsPhotos () {

  const { vans }= useOutletContext()

  const vandetailsElement = vans.map(van => (
    <img alt="van image"
      className="host-vandetail-img"
      src={van.imageUrl} />
  ))

  return (
    <div className="host-vandetails-div">
      {vandetailsElement}
    </div>
  )
}

export default HostDetailsPhotos