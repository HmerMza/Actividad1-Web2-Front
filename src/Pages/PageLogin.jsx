import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const PageLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //aqui estara la funcion para el login
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Enviamos los datos del login al backend
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    // Verificamos que la respuesta del backend sea exitosa
    if (response.ok) {
      // El login fue exitoso
      // Obtenemos el mensaje de bienvenida
      const data = await response.json();
      alert(data.message);
    } else {
      // El login no fue exitoso
      // Mostramos un mensaje de error al usuario
      const data = await response.json();
      alert(data.message);
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
          type="email"
          label="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          type="password"
          variant="outlined"
          label="Contraseña"
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
