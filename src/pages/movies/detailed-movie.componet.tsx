/* eslint-disable react-hooks/exhaustive-deps */
import { Box, CardMedia, Grid } from "@mui/material";
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
      <Grid>
        <Box
          sx={{
            maxWidth: "20%",
            mx: "10rem",
            my: "10rem",
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
    </>
  );
};
