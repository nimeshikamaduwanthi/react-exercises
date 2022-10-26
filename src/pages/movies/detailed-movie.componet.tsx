/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import { MovieContext } from "contexts/movies/movies.context";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TMovie } from "types/movie.types";

export const DetailedMovei = (): JSX.Element => {
  const movieId = useParams().id ?? "";
  const { getMovieDetail } = useContext(MovieContext);
  const [movie, setMovie] = useState<TMovie | null>();

  const getMovie = async (): Promise<void> => {
    const movie = await getMovieDetail(movieId);
    setMovie(movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={5}>
          <Box
            sx={{
              maxWidth: "70%",
              marginTop: "10rem",
              marginBottom: "10rem",
              marginLeft: "22rem",
              background: "red",
            }}
          >
            <CardMedia
              component="img"
              image={movie?.posterURL}
              alt="green iguana"
            />
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Typography
            sx={{ marginTop: "15rem", mx: "8rem", color: "#0e76bc" }}
            gutterBottom
            variant="h3"
            component="div"
          >
            {movie?.title}
          </Typography>
          <Typography sx={{ mx: "8rem" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            voluptates quisquam possimus tenetur, dicta enim rerum quis, quaerat
            id nobis provident quo dolorum sapiente temporibus facere non
            repellendus consequatur cupiditate!
          </Typography>
          <Typography sx={{ mx: "8rem" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            voluptates quisquam possimus tenetur, dicta enim rerum quis, quaerat
            id nobis provident quo dolorum sapiente temporibus facere non
            repellendus consequatur cupiditate!
          </Typography>
          <Button
            sx={{ m: "8rem", background: "#0e76bc", color: "#fff" }}
            onClick={() =>
              window.open(`https://www.imdb.com/title/${movie?.imdbId}/`)
            }
          >
            <strong>Check IMDb Details</strong>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
