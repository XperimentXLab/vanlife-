import { Navigate, redirect } from "react-router-dom"
////bug not going to login page!  //and not getting error

export async function AuthRequired(request) {
  const pathname = new URL(request.url).pathname
  const isLoggedIn = localStorage.getItem("loggedin")
  console.log(pathname)
  /*
  if (!isLoggedIn) { 
    console.error("User is not logged in. Redirecting to /login.")
    throw <Navigate to={`/login?redirectTo=${pathname}`} state={{message: "You must log in first"}} /> 
    //<Navigate to=""/> = to automatically send to a diffrent route in an app
    
    //throw redirect(`/login?redirectTo=${pathname}`) //a simple component with a button that, when clicked, will redirect the user to a new path (but can't be used anymore)
    /*
    return <Navigate to="/login" state={{
      message: "You must log in first"
    }} />
  }
  */

  if (!isLoggedIn) { 
    console.log("User is not logged in. Redirecting to /login.")
    //throw redirect(`/login?redirectTo=${pathname}`)
    throw redirect("/login")
    //return <Navigate to="/login" replace />
  } 

  console.log("Auth check passed. User is logged in."); 
  return null

}

