import logo from "../assets/logo.png";
import { Box, AppBar, Icon, Toolbar } from "@mui/material";
import Input from "@mui/joy/Input";
import { Search, Favorite } from "@mui/icons-material";

function Header() {
  return (
    // <AppBar position="fixed" sx={{ mb: 3 }}>
    <Box position="fixed"  sx={{ top: 0, bottom: 'auto', right: 0, p: 1, zIndex: 1, height: "100px", width: "100%" }}>

      {/* <Toolbar> */}
        <img
          src={logo}
          height="90%"
          width={200}
          alt="the-perfect-recipe-logo"
        />
        {/* <Input
        placeholder="search"
        variant="outlined"
        startDecorator={<Search />}
      /> */}
        {/* <Icon aria-label="add to favorites">
          <Favorite />
        </Icon> */}
      {/* </Toolbar> */}
        </Box>
    // </AppBar>
  );
}

export default Header;
