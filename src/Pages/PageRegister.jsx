import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useActiveUser } from "../Hooks/useUserContext";

const PageRegister = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  //para verificar que exista un token o usuario
  useActiveUser();

  //para redirigir al login

  const navigate = useNavigate();
  //esta sera la funcion para el registrar
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    try {
      const response = await fetch("http://localhost:2659/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),

      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.mensaje);
        navigate("/");
      } else {
        const data = await response.json();
        alert(data.mensaje);
      }
      
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  };

  return (
    <Box className="mt-8 max-w-[405px] p-3 mx-auto text-center border shadow-md rounded-lg">
      <Box>
        <Typography variant="h4">Registro</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          sx={{ my: 3 }}
          type="text"
          label="Username"
          placeholder="Ejemplo@ejemplo.com"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <TextField
          fullWidth
          sx={{ mb: 3 }}
          type="password"
          label="Contraseña"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button fullWidth sx={{ mb: 1 }} variant="contained" type="submit">
          Registrar
        </Button>
        <Button fullWidth component={Link} to="/">
          ¿Ya tienes cuenta?
        </Button>
      </form>
    </Box>
  );
};

export default PageRegister;
