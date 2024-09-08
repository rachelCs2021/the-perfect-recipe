import logo from "../assets/logo.png";
import { Box, AppBar } from "@mui/material";

function Header() {
  return (
      <AppBar position="fixed" sx={{mb: 3}}>
        <img src={logo} height={120} width={200} alt="the-perfect-recipe-logo" />
      </AppBar>
  );
}

export default Header;
