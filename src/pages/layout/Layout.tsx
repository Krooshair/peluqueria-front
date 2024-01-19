import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import NvLink from "../../components/NvLink";

const Layout = () => {

  const [isVisible, setIsVisible] = useState<boolean>(true)
  const { user, singout } = useAuth();

  const handleClick = () => {
    if(isVisible){
      setIsVisible(false)
      localStorage.setItem('sidebar', 'invisible')
    }else{
      setIsVisible(true)
      localStorage.setItem('sidebar', 'visible')
    }
  }

  useEffect(() => {
    const sidebar = localStorage.getItem('sidebar')
    if(sidebar === 'visible'){
      setIsVisible(true)
    }else{
      setIsVisible(false)
    }
  }, [isVisible])

  return (
    <div className="flex h-screen w-full">
      <div className={`flex h-full duration-500 ${isVisible? "w-1/4 py-4 pr-2" : "w-0 p-0"} flex-col justify-between border-r-2 border-rose-500 bg-white overflow-hidden`}>
        <div className="h-fit w-full px-4 py-2">logo</div>
        <nav className="flex w-full flex-col gap-2">
          <NvLink to="/dashboard">Dashboard</NvLink>
          <NvLink to="/user">Usuarios</NvLink>
          <NvLink to="/bank">Bancos</NvLink>
          <NvLink to="/services">Servicios</NvLink>
          <NvLink to="/stylist">Estilistas</NvLink>
          <NvLink to="/clients">Clientes</NvLink>
          <NvLink to="/appointment ">Citas</NvLink>
          <NvLink to="/budget">Presupuesto</NvLink>
          <NvLink to="/no-location">Citas sin direccion</NvLink>
        </nav>
        <Link
          to="/singin"
          onClick={singout}
          className="h-fit w-full rounded-e-full bg-rose-500 px-4 py-2 font-salsa text-white"
        >
          Cerrar Sesion
        </Link>
      </div>
      <div className="flex h-full w-full flex-col">
        <div className="flex h-fit w-full justify-between items-center bg-white p-4 shadow-lg">
          <img src="/svg/chevron-left.svg" alt="Chevron" className={`size-6 cursor-pointer duration-500 ${isVisible? "rotate-0" : "rotate-180"}`} onClick={handleClick}/>
          <h2 className="font-salsa text-lg">
            Hola, <span className="text-rose-500 underline">{user? user.name : null}</span>
          </h2>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
