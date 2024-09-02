import { Box } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../utils/axiosConfig";
import { useContext, useState } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import "./Assets/Styles/UserSideBar.css";

function UserSideBar() {
  const { theme } = useContext(ThemeContext);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("token");
    await Axios.get("/api/logout");
    setIsLoggedOut(true);
  };

  const links = [
    { to: "/usuario/", label: "DASHBOARD" },
    { to: "/usuario/micarrito", label: "MI CARRITO" },
    { to: "/usuario/mispedidos", label: "MIS PEDIDOS" },
    { to: "/usuario/misdeseos", label: "LISTA DE DESEOS" },
    { to: "/usuario/direcciones", label: "DIRECCIONES" },
    { to: "/usuario/perfil", label: "PERFIL" },
    { to: "/usuario/ayuda", label: "CENTRO DE AYUDA" },
  ];

  if (isLoggedOut) {
    navigate("/login", { replace: true });
  }

  return (
    <Box
        className="userSideBar-container"
        bg={theme.secondaryBackground}
    >
      {links.map(({ to, label }) => (
        <Link key={to} bg={theme.secondaryBackground} id="userSideBar-link" to={to}>
          {label}
        </Link>
      ))}
      <Link
        bg={theme.secondaryBackground}
        id="userSideBar-link"
        to="#"
        onClick={handleLogout}
      >
        CERRAR SESIÓN
      </Link>
    </Box>
  );
}

export default UserSideBar;
