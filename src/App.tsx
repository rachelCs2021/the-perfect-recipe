import "./App.css";
import Header from "./component/Header";
import CardButton from "./component/CardButton";
import RecipeCard from "./component/Card";
import { Container, Box } from "@mui/material";
import NewRecipe from "./component/NewRecipe";

const images = [
  {
    url: "https://cdn.pixabay.com/photo/2016/11/29/04/49/blueberries-1867398_640.jpg",
    title: "Pancake",
    width: "40%",
  },
  {
    url: "https://cdn.pixabay.com/photo/2023/05/01/14/42/ai-generated-7963232_640.jpg",
    title: "Burgers",
    width: "30%",
  },
  {
    url: "https://cdn.pixabay.com/photo/2018/07/01/19/50/muffin-3510308_640.jpg",
    title: "Cake",
    width: "30%",
  },
];

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <NewRecipe />
      {/* <Box
        sx={{
          mt: 16,
          px: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {images.map((image, index) => (
          <CardButton
            id={index}
            key={index}
            title={image.title}
            width={image.width}
            url={image.url}
          />
        ))}
      </Box> */}
    </Container>
  );
}

export default App;
