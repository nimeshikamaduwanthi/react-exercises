/* eslint-disable react-hooks/exhaustive-deps */
import { MovieContext } from "contexts/movies/movies.context";
import { useContext, useEffect, useState } from "react";
import { TMovieList } from "types/movie.types";
import { Grid } from "@mui/material";
import { MovieCard } from "components/movie/movie-card.componet";

export const Movies = (): JSX.Element => {
  const [movies, setMovies] = useState<TMovieList[]>();
  const { getMovieList } = useContext(MovieContext);

  const getMovies = async (): Promise<void> => {
    const movies = await getMovieList();
    setMovies(movies);
    console.log(movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Grid
        mt="5rem"
        mx="5rem"
        sx={{
          display: "grid",
          columnGap: 2,
          rowGap: 2,
          gridTemplateColumns: `repeat(6, 1fr)`,
        }}
      >
        {movies?.map((movie, index: number) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      </Grid>
    </>
  );
};
