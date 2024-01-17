import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"
import NvLink from "../components/NvLink";

const Layout = () => {

  const {singout} = useAuth()

  return(
    <div className="w-full h-screen flex">
      <div className="w-1/4 h-full bg-white py-4 pr-2 flex flex-col justify-between">
        <div className="w-full h-fit py-2 px-4">
          logo
        </div>
        <nav className="w-full flex flex-col gap-2">
          <NvLink to='/dashboard'>Dashboard</NvLink>
          <NvLink to='/dashboard/user'>Usuarios</NvLink>
          <NvLink to='/dashboard/bank'>Bancos</NvLink>
          <NvLink to='/dashboard/services'>Servicios</NvLink>
          <NvLink to='/dashboard/stylist'>Estilistas</NvLink>
          <NvLink to='/dashboard/clients'>Clientes</NvLink>
          <NvLink to='/dashboard/appointment '>Citas</NvLink>
          <NvLink to='/dashboard/budget'>Presupuesto</NvLink>
          <NvLink to='/dashboard/no-location'>Citas sin direccion</NvLink>
        </nav>
        <Link to='/singin' onClick={singout} className="w-full h-fit py-2 px-4 bg-rose-500 rounded-e-full text-white font-salsa">Cerrar Sesion</Link>
      </div>
      <div>
        <div></div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout