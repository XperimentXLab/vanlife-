import { Outlet } from "react-router-dom"
import Header from "./Header" 
import Footer from "./Footer"

function Layout () {
  return (
    <div>
      <Header />
      <Outlet /> 
      <Footer />
    </div>
  )
}

export default Layout

//Nested Route
//Outlet = a placeholder that fills with whatever nested routes you define aka children route