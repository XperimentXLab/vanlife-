import { useOutletContext } from "react-router-dom"

function HostDetailsPricing () {
  
  const { vans }= useOutletContext()

  return (
    <div className="host-vandetails-div">
      <span><b>Price:</b> ${vans.price}/day</span>
    </div>
  )
}

export default HostDetailsPricing