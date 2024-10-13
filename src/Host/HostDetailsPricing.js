import { useOutletContext } from "react-router-dom"

function HostDetailsPricing () {
  
  const { vans }= useOutletContext()

  const vandetailsElement = vans.map(van => (
    <span><b>Price:</b> ${van.price}/day</span>
  ))

  return (
    <div className="host-vandetails-div">
      {vandetailsElement}
    </div>
  )
}

export default HostDetailsPricing