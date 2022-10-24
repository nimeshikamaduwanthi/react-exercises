import { MovieContext } from "contexts/movies/movies.context";
import { useContext, useEffect, useState } from "react";

export const Movies = (): JSX.Element => {
  const [movies, setMovies] = useState<any>([]);
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
    <div>
      <h1>movie</h1>
      {movies.map((post: any, index: number) => {
        return post;
      })}
    </div>
  );
};
