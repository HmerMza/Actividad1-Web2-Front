import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerToken } from "./useToken";

//inicializamos el context
export const useUserContext = createContext();
const token = obtenerToken();
const UseProvider = ({ children }) => {
  //aqui guardare la si el usuario es valido

  const [user, setUser] = useState(token);
  return (
    <useUserContext.Provider value={{ user, setUser }}>
      {children}
    </useUserContext.Provider>
  );
};

//para redireccionar en caso de que el usuario exista
export const useActiveUser = () => {
  const { user } = useContext(useUserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      //en caso de estar el usuario activo, no debe ingresar, ni al register, ni al login
      navigate("/dashboard");
    }
  }, [user]);
};

export default UseProvider;
