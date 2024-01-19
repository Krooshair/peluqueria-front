import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

type Inputs = {
  email: string;
  password: string;
  isRemember: boolean;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { singin, isAuth, isErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/dashboard");
    }
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => singin(data);

  if (isAuth) {
    return null;
  }

  return (
    <div className="relative z-0 h-screen w-full overflow-hidden">
      <div className="mx-auto h-full w-[90%] max-w-screen-lg py-12">
        <div className="flex h-full w-full rounded-2xl md:bg-[#FAFAFA]">
          <div className="hidden h-full w-full rounded-s-xl bg-presentation bg-cover bg-center bg-no-repeat md:block"></div>
          <div className="flex h-full w-full flex-col justify-around overflow-hidden md:relative md:p-2">
            <div className="flex h-full w-full flex-col justify-center gap-2">
              <h1 className="font-salsa text-5xl">Bienvenido</h1>
              <h2 className="font-montserrat">
                Que bueno tenerte el dia de hoy, únete!
              </h2>
            </div>
            <form
              className="flex h-full w-full flex-col items-center justify-between"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex h-full w-full flex-col gap-4">
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2">
                  <label htmlFor="email">
                    <img src="/svg/email.svg" alt="Email" />
                  </label>
                  <input
                    type="email"
                    id="email"
                    autoFocus
                    {...register("email", { required: true })}
                    placeholder="Correo electronico"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2">
                  <label htmlFor="password">
                    <img src="/svg/key.svg" alt="Email" />
                  </label>
                  <input
                    type="password"
                    id="password"
                    {...register("password", { required: true })}
                    placeholder="Contraseña"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      id="remember"
                      {...register("isRemember")}
                      className="peer size-4 cursor-pointer appearance-none rounded-sm border-2 border-blue-500 bg-white bg-check bg-contain bg-center bg-no-repeat checked:bg-blue-500"
                    />
                    <label
                      htmlFor="remember"
                      className="cursor-pointer text-sm peer-checked:text-blue-500"
                    >
                      Recuerdame
                    </label>
                  </div>
                  <Link
                    to="/recover-password"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>
              <button className="w-full max-w-xs rounded-full bg-white py-2 font-salsa md:bg-rose-500 md:text-white">
                Ingresar
              </button>
            </form>

            {/* ALERTA DE ERRORES */}
            {errors.email && (
              <div className="absolute right-4 top-4 flex w-1/2 max-w-60 animate-alert justify-center rounded-md bg-rose-900 p-2">
                <span className="text-center text-xs text-white">
                  El correo es obligatorio
                </span>
              </div>
            )}
            {errors.email
              ? errors.password && (
                  <div className="absolute right-4 top-14 flex w-1/2 max-w-60 animate-alert justify-center rounded-md bg-rose-900 p-2">
                    <span className="text-center text-xs text-white">
                      La contraseña es obligatoria
                    </span>
                  </div>
                )
              : errors.password && (
                  <div className="absolute right-4 top-4 flex w-1/2 max-w-60 animate-alert justify-center rounded-md bg-rose-900 p-2">
                    <span className="text-center text-xs text-white">
                      La contraseña es obligatoria
                    </span>
                  </div>
                )}
            {isErrors ? (
              <div className="absolute right-4 top-4 flex w-1/2 max-w-60 animate-alert justify-center rounded-md bg-rose-900 p-2">
                <span className="text-center text-xs text-white">
                  {isErrors}
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* FIGURAS */}
      <figure className="absolute -right-32 -top-40 -z-10 size-72 rounded-full bg-rose-500 md:-right-[20rem] md:-top-[20rem] md:size-[32rem] lg:size-[40rem] xl:size-[48rem]"></figure>
      <figure className="absolute -right-64 -top-10 -z-10 size-80 rounded-full bg-rose-400 md:invisible"></figure>

      <figure className="absolute -bottom-64 -left-72 -z-10 size-[36rem] rounded-[55%] bg-rose-400 md:-bottom-[40rem] md:-left-[28rem]  md:size-[76rem] lg:size-[82rem]"></figure>
      <figure className="absolute -bottom-3/4 right-1/2 -z-10 size-[32rem] translate-x-1/2 rounded-[55%] bg-rose-500 md:invisible"></figure>
    </div>
  );
};

export default Login;
