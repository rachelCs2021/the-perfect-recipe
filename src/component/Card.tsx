import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Icon,
} from "@mui/material";
import { Favorite, Share } from "@mui/icons-material";

interface Props {
    recipeName: string,
    category: string,
    img: string
}

function RecipeCard(props: Props) {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 310, minHeight: 400, mx: 'auto' }}>
      {/* <CardActionArea> */}
        <CardMedia
          component="img"
          height="194"
          image={props.img}
          alt="Paella dish"
        />

        <CardContent>
          <Typography variant="h3">
            {props.recipeName}
          </Typography>
          <Typography variant="h6">
            {props.category}
          </Typography>
        </CardContent>

        <CardActions>
          <Icon aria-label="add to favorites">
            <Favorite />
          </Icon>
          <Icon aria-label="share">
            <Share />
          </Icon>
        </CardActions>
      {/* </CardActionArea> */}
    </Card>
  );
}

export default RecipeCard;
