import { Link, useRouteError } from "react-router-dom";

function ReLogin () {
  const error = useRouteError()

  return (
    <div className="page404-div">
      <h3>You need to log in first!</h3>
      <pre>{error.statusText || error.message}</pre>
      <Link to={`/login`} 
        className="page404-returnhome"
      >Go to Login</Link>
    </div>
  )
}

export default ReLogin