import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Para guardar el token en las Cookies
export const guardarToken = (token) => {
  //el token expirara en 3 minutos
  Cookies.set("token", token, { expires: 1 / 24 / 20 });
  //mostrar el token
  console.log(token);
};

//para obtener el token
export const obtenerToken = () => {
  const token = Cookies.get("token");
  if (token) {
    return token;
  } else {
    return false;
  }
};

//para verificar si el token esta activo
export const useActiveToken = () => {
  const navigate = useNavigate();
  const token = obtenerToken();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  });
};

//para verificar el token en el back
export const verificarToken = async () => {
  const token = obtenerToken();

  const response = await fetch("http://localhost:2659/api/protected", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

if (response.status === 200) {
  console.log("token valido");
} else {
  console.log("el token experio");
}
}
