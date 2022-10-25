export type TMovie = {
  title: string;
  posterURL: string;
  imdbId: string;
};

export type TMovieList = {
  posts: TMovie[];
};
