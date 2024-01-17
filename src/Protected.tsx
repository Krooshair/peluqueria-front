import { Outlet } from "react-router-dom"
import { useAuth } from "./context/AuthContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


const Protected = () => {

  const {isAuth} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(!isAuth){
      navigate('/singin')
    }
  })

  if(!isAuth){
    return null
  }

  return <Outlet></Outlet>
  
}

export default Protected