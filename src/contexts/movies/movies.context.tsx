import { createContext, ReactNode } from "react";
import { TMovie, TMovieList } from "types/movie.types";
import { getMovieDetail, getMovieList } from "./movies.service";

type Props = {
  children: ReactNode;
};

type TMovieContext = {
  getMovieList: () => Promise<TMovieList[]>;
  getMovieDetail: (id: string) => Promise<TMovie | null>;
};

const defaultValues: TMovieContext = {
  getMovieList: async () => [],
  getMovieDetail: async () => null,
};

export const MovieContext = createContext(defaultValues);

export const MovieProvider = ({ children }: Props): JSX.Element => {
  const value = {
    getMovieList,
    getMovieDetail,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
