import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const PageLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("vamos por aqui");
  };

  return (
    <Box className="mt-8 max-w-[400px] mx-auto text-center">
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
