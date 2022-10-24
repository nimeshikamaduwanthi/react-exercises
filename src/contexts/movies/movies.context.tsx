import React from "react";
import { createContext, ReactNode } from "react";
import { TMovieList } from "types/movie.types";
import { getMovieList } from "./movies.service";

type Props = {
  children: ReactNode;
};

type TMovieContext = {
  getMovieList: () => Promise<TMovieList[]>;
};

const defaultValues: TMovieContext = {
  getMovieList: async () => [],
};

export const MovieContext = createContext(defaultValues);

export const MovieProvider = ({ children }: Props): JSX.Element => {
  const value = {
    getMovieList,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
