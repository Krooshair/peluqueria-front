import { useState, useEffect, useContext, createContext, PropsWithChildren } from "react";
import { login, logout, DataLogin } from "../api/auth";
import Cookie from 'js-cookie'

interface AuthValue {
  singin(data: DataLogin): Promise<void>;
  singout(): Promise<void>;
  user: object;
  isAuth: boolean;
  isErrors: string;
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
  const [user, setUser] = useState<object>({});
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [isErrors, setIsErrors] = useState<string>('')

  useEffect(() => {
    const token: string | undefined = Cookie.get('token')
    if(typeof token == 'string' && token){
      setIsAuth(true)
    }
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

  const singin = async (data: DataLogin): Promise<void> => {
    try {
      const res = await login(data);
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
    <AuthContext.Provider value={{ singin, singout, user, isAuth, isErrors }}>
      {children}
    </AuthContext.Provider>
  );
};
