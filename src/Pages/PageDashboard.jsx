import { Typography } from "@mui/material";
import CompCard from "../Components/CompCard";
import { useActiveToken } from "../Hooks/useToken";

const PageDashboard = () => {
  //verifico si el token esta activo
  useActiveToken();
  return (
    <div className="container flex flex-col justify-center items-center mt-5">
      <Typography variant="h3" component="h5">
        Bienvenido Sigue escuchando tu musica favorita
      </Typography>
      <CompCard />
    </div>
  );
};
export default PageDashboard;
