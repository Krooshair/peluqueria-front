import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string;
}

const Card = ({title, children}: Props) => {
  return (
    <div className="w-full h-full flex flex-col rounded-md">
      <div className="w-full h-fit p-2 bg-rose-500 rounded-t-lg">
        <h1 className="w-full text-white font-salsa text-lg">{title}</h1>
      </div>
      <div className="w-full h-full bg-white rounded-b-lg p-2">
        {children}
      </div>
    </div>
  )
}

export default Card