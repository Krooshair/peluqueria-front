import { useState, useEffect, useContext, createContext, PropsWithChildren } from "react";
import { login, logout, profile, DataLogin } from "../api/auth";
import Cookie from 'js-cookie'

type DataUser = {
  username?: string,
  email?: string,
  name?: string,
  lastname?: string,
  id_role?: number,
}

interface AuthValue {
  singin(data: DataLogin): Promise<void>;
  singout(): Promise<void>;
  user: DataUser | undefined;
  isAuth: boolean;
  isErrors: string;
  isLoading: boolean;
}

interface ErrorWithResponse extends Error {
  response?: { data: string };
}

const AuthContext = createContext<AuthValue | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("Debe tener un provider para utilizar este contexto.");
  }
  return context;
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<DataUser | undefined>();
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [isErrors, setIsErrors] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const verifyTk = async (): Promise<void> => {
      try {
        const token: string | undefined = Cookie.get('token')
        if(typeof token == 'string' && token){
          const res  = await profile()
          setUser(res.data)
          setIsAuth(true)
        }
      } catch (error) {
        console.log(error);
      }finally{
        setIsLoading(false)
      }
    }

    verifyTk()
  }, [])

  useEffect(() => {
    let timer: number;
    if(isErrors){
      timer = setTimeout(() => {
        setIsErrors('')
      }, 5000)
    }
    return () => {
      if(timer){
        clearTimeout(timer)
      }
    }
  }, [isErrors])

  const singin = async (user: DataLogin): Promise<void> => {
    try {
      const res = await login(user);
      setUser(res.data);
      setIsAuth(true)
      console.log(res);
    } catch (error: unknown) {
      const err = error as ErrorWithResponse;
      if (err.response) {
        setIsErrors(err.response.data)
        console.log(err.response.data);
      }
    }
  };

  const singout = async(): Promise<void> => {
    try {
      const token: string | undefined = Cookie.get('token')
      if(typeof token == 'string' && token){
        await logout(token)
        Cookie.remove('token')
        setUser({})
        setIsAuth(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ singin, singout, user, isAuth, isErrors, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
