import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }: any): JSX.Element => {
  return (
    <Grid display="flex">
      <Card
        sx={{
          background: "#1b1b1b",
          color: "#fff",
        }}
      >
        <CardMedia
          component="img"
          height="160"
          image={movie.posterURL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Link style={styles.link} to={`movie/${movie.id}`}>
              {movie.title}
            </Link>
          </Typography>
          <Typography variant="body2" color="#fff">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">
            {" "}
            <Link to={`movie/${movie.id}`}>Learn More </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const styles = {
  link: {
    color: "#fff",
    textDecoration: "none",
  },
};
