import { useOutletContext } from "react-router-dom"

function HostDetailsPhotos () {

  const { vans }= useOutletContext()

  return (
    <div className="host-vandetails-div">
      <img alt="van_image"
        className="host-vandetail-img"
        src={vans.imageUrl} 
      />
    </div>
  )
}

export default HostDetailsPhotos