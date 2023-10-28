import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const PageRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    console.log(user, "registrado");
  };

  return (
    <Box className="mt-8 max-w-[400px] mx-auto text-center">
      <Box>
        <Typography variant="h4">Formulario Registro</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          sx={{ my: 3 }}
          type="text"
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          sx={{ mb: 3 }}
          type="email"
          label="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          sx={{ mb: 3 }}
          type="password"
          label="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button fullWidth sx={{ mb: 1 }} variant="contained" type="submit">
          Registrar
        </Button>
        <Button fullWidth component={Link} to="/login">
          Ya tienes cuenta?
        </Button>
      </form>
    </Box>
  );
};

export default PageRegister;
