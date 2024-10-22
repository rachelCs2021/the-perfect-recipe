import CardButton from "./component/CardButton";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid2";

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
    url: "https://cdn.pixabay.com/photo/2023/05/01/14/42/ai-generated-7963232_640.jpg",
    title: "Burgers",
    width: "30%",
  },
  {
    url: "https://cdn.pixabay.com/photo/2018/07/01/19/50/muffin-3510308_640.jpg",
    title: "Cake",
    width: "30%",
  },
  {
    url: "https://cdn.pixabay.com/photo/2018/07/01/19/50/muffin-3510308_640.jpg",
    title: "Cake",
    width: "30%",
  },
];

const Home = () => {
  return (
    <Box
      sx={{ mt: 16, mb: 5 }}>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Link to="/recipe">
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <CardButton
                id={index}
                key={index}
                title={image.title}
                width={image.width}
                url={image.url}
              />
            </Grid>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
