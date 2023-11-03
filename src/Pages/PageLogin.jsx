import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useActiveUser, useUserContext } from "../Hooks/useUserContext";
import { guardarToken } from "../Hooks/useToken";

const PageLogin = () => {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //para guardar los datos del ususario
  const { setUser } = useContext(useUserContext);
  //verifico si el usuario existe
  useActiveUser();

  //para redirigir cuando el usuario inicie sesion
  const navigate = useNavigate();
  //aqui estara la funcion para el login
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Enviamos los datos del login al backend
    const response = await fetch("http://localhost:2659/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    // Verificamos que la respuesta del backend sea exitosa
    if (response.ok) {
      // El login fue exitoso
      // Obtenemos el mensaje de bienvenida
      const data = await response.json();
      console.log(data);
      //guardo el usuario
      setUser(data.token);
      guardarToken(data.token);
      //lo redirecciono al dashboard
      navigate("/dashboard");
    } else {
      // El login no fue exitoso
      // Mostramos un mensaje de error al usuario
      const data = await response.json();
      alert(data.mensaje);
    }
  };
  return (
    <Box className="mt-8 max-w-[405px] p-3 mx-auto text-center border shadow-md rounded-lg">
      <Box>
        <Typography variant="h4">Login</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ my: 3 }}
          fullWidth
          variant="outlined"
          type="text"
          label="username"
          value={username}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          type="password"
          variant="outlined"
          label="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button fullWidth variant="contained" type="submit" sx={{ mb: 1 }}>
          Ingresar
        </Button>

        <Button fullWidth component={Link} to="/register">
          Aun no Tienes cuenta?
        </Button>
      </form>
    </Box>
  );
};

export default PageLogin;
