import { signOut } from "firebase/auth"
import { auth } from "../config-firebase/firebase"
import { useNavigate } from "react-router-dom"

const SignOut = () => {
const navigate = useNavigate()
    const handleSignOut = async () => {
        await signOut(auth)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
navigate("/")
    }
  return (
    <div>
          <h1>welcomr</h1>
          <button onClick={handleSignOut}>
              
          </button>
    </div>
  )
}

export default SignOut
