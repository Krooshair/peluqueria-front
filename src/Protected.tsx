import { Outlet } from "react-router-dom"
import { useAuth } from "./context/AuthContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Spiner from "./components/Spiner"


const Protected = () => {

  const {isAuth, isLoading} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(!isAuth && !isLoading){
      navigate('/singin')
    }
  }, [isAuth, isLoading])

  if(isLoading){
    return <Spiner />
  }

  if(!isAuth){
    return null
  }

  return <Outlet></Outlet>
  
}

export default Protected