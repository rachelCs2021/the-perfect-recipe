import "./App.css";
import RecipeCard from "./component/Card";
import Header from "./component/Header";
import { Container, Box } from "@mui/material";

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Box sx={{mt: 16, px: "auto", display: "flex"}}>
        <RecipeCard recipeName="chicken" category="mainDishes" img="https://picsum.photos/seed/picsum/200/300" />
        <RecipeCard recipeName="cake" category="cakes" img="https://picsum.photos/seed/picsum/200/300" />
        <RecipeCard recipeName="cake" category="cakes" img="https://picsum.photos/seed/picsum/200/300" />
        {/* <RecipeCard />
        <RecipeCard /> */}
      </Box>
    </Container>
  );
}

export default App;
