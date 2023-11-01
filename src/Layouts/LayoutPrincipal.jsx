import { Outlet } from "react-router-dom";
import CompNavbar from "../Components/CompNavbar";


const LayoutPrincipal = () => {
  return (
    <>
      <CompNavbar />
      <div className="container text-center m-auto">
        <Outlet />
      </div>
    </>
  );
};

export default LayoutPrincipal;
