import { Footer } from "components/footer/footer.component";
import { Header } from "components/header/header.component";
import { Movies } from "pages/movies/movies.componet";
import { COMMON_ROUTES, MOVIE_ROUTES } from "enums/routes.enums";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailedMovei } from "pages/movies/detailed-movie.componet";
import { About } from "pages/about/about-page";
import { Terms } from "pages/term/term-page";

const Routers = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={MOVIE_ROUTES.MOVIES_HOME} element={<Movies />} />
        <Route path={MOVIE_ROUTES.DETAILED_MOVIE} element={<DetailedMovei />} />
        <Route path={COMMON_ROUTES.ABOUT_PAGE} element={<About />} />
        <Route path={COMMON_ROUTES.TERM_PAGE} element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routers;
