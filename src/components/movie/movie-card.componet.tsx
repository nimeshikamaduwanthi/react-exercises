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
    <Grid>
      <Card
        sx={{
          background: "#1b1b1b",
          color: "#fff",
          height: 400,
          maxHeight: 400,
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
          <Button style={styles.linkMore} size="small">
            Share
          </Button>
          <Button size="small">
            {" "}
            <Link style={styles.linkMore} to={`movie/${movie.id}`}>
              Learn More{" "}
            </Link>
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
  linkMore: {
    color: "#0e76bc",
    textDecoration: "none",
  },
};
