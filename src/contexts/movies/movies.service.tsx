import Axios from "axios";
import { TMovie } from "../../types/movie.types";

export const getMovieList = async (): Promise<TMovie[]> => {
  try {
    const { data } = await Axios.get(
      "https://api.sampleapis.com/movies/animation"
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetail = async (id: string): Promise<TMovie | null> => {
  try {
    const { data } = await Axios.get(
      `https://api.sampleapis.com/movies/animation/${id}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
