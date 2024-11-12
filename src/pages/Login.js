//import { useState } from "react"
import { useLoaderData, Form, json, redirect, replace, useActionData, useNavigation, Navigate } from "react-router-dom"
import { loginUser } from "../api"

export function loader ({ request }) {
  return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
  console.log(request)
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"
  console.log(email, password)

  try {
    await loginUser( email, password )
    localStorage.setItem("loggedin", true)
    //return redirect("/host") //bug not go to host page!!
    return <Navigate to="/host" />
  } catch (err) {
    return err.message
  }
  //localStorage.setItem("email", JSON.stringify(email))
  //localStorage.setItem("password", JSON.stringify(password))
  //const theEmail = localStorage.getItem("email")
  //const thePass = localStorage.getItem("password")
}

function Login () {

  /*
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  })
  
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)
  
  const message = useLoaderData()
  const navigate = useNavigate() //not useful for loader and action

  async function handleSubmit (e) {
    e.preventDefault()
    setStatus("submitting")
    setError(null)
    //console.log(loginFormData)
    loginUser(loginFormData)
      .then(data => {
        console.log(data)
        navigate("/host", {replace: true}) //not useful for loader and action
      })
      .catch(err => setError(err))
      .finally(()=>setStatus("idle"))

  }
  
  function handleChange (e) {
    const {name, value} = e.target
    setLoginFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  */

  const errorMessage = useActionData()  //error
  const navigation = useNavigation()  //status

  return (
    <div className="login-div-big">

      {/*message && <pre className="red-message ">{message}</pre>*/}

      <h2>Sign in to your account</h2>

      {errorMessage && <pre className="red-message">{errorMessage}</pre>}

      <Form method="post" replace
        className="login-form-div"
        //onSubmit={handleSubmit}
      >
        <input 
          placeholder="Enter email"
          className="login-input-email"
          type="email"
          name="email"
          //value={loginFormData.email}
          //onChange={handleChange}
        />
        <br />
        <input 
          placeholder="Enter password"
          className="login-input-pass"
          type="password"
          name="password"
          //value={loginFormData.password}
          //onChange={handleChange}
        />
        <br />
        <button
          className="login-btn"
          disabled={navigation.state === "submitting"}
        >{navigation.state === "idle" ? "Log In" : "Logging In...."}</button>
      </Form>

    </div>
  )
}

export default Login