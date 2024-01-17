import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom"

interface NvLinkProps extends PropsWithChildren {
  to: string;
}

const NvLink = ({to, children}: NvLinkProps) => {
  return (
    <NavLink to={to} className={({isActive}) => {
      return `w-full h-fit py-2 px-4 rounded-e-full font-salsa duration-300 ${isActive ? 'text-white bg-rose-500' : 'hover:text-white hover:bg-rose-500'}`
    }}>{children}</NavLink>
  )
}

export default NvLink