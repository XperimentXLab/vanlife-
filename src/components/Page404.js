import { Link } from "react-router-dom"

function Page404 () {

  return (
    <div className="page404-div">
      <h2>
        Sorry, the page you were looking for was not found. 
      <br />
        
      </h2>
      <Link to='/' className="page404-returnhome">
        <h3>Return to home</h3>
      </Link>

    </div>
  )
}

export default Page404