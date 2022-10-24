import Axios from "axios";
import { TMovieList } from "../../types/movie.types";

export const getMovieList = async (): Promise<TMovieList[]> => {
  try {
    const { data } = await Axios.get(
      "https://api.sampleapis.com/movies/animation"
    );
    return data;
  } catch (error) {
    throw error;
  }
};
