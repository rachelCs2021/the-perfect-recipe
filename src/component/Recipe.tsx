import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

function Recipe() {
  return (
    <Box sx={{ mt: 13, mx: 0 }}>
      <Grid container spacing={0}>
        <Grid size={4}>
          <Box
            component="div"
            sx={{ backgroundColor: "pink", height: "290px", pt: "50%" }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{ border: "2px solid white", textAlign: "center" }}
            >
              פנקיייקים
            </Typography>
          </Box>
        </Grid>
        <Grid size={8}>
          <img
            src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_640.jpg"
            alt="pancake"
            width="100%"
          />
        </Grid>
      </Grid>
      <Box component='div' sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          מצרכים
        </Typography>
        <Typography variant="body1" gutterBottom>
          כוס קמח <br />
          ביצה <br />
          כוס חלב <br />
          אבקת סוכר
        </Typography>
        <Typography variant="h4" gutterBottom>
          אופן ההכנה
        </Typography>
        <Typography variant="body1" gutterBottom>
          לערבב את החומרים יחד <br />
          לחמם מחבת על אש בינונית <br />
          עם מצקת לקחת כמות ולהשים במחבת <br />
          לאחר דקה וחצי הופכים <br />
        </Typography>
      </Box>
    </Box>
  );
}

export default Recipe;

// function that make the paragraf to an array of sentences
// each one have a timeline
// the timeline should be with number of the order of preparation
