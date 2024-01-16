import { useState, useContext, createContext, PropsWithChildren } from "react";
import { login, DataLogin } from "../api/auth";

interface AuthValue {
  singin(data: DataLogin): Promise<void>;
  user: object;
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

  const singin = async (data: DataLogin): Promise<void> => {
    try {
      const res = await login(data);
      setUser(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ singin, user }}>
      {children}
    </AuthContext.Provider>
  );
};
