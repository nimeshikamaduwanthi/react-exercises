import { AppBar, Grid } from "@mui/material";
import { MOVIE_ROUTES } from "enums/routes.enums";
import { Link } from "react-router-dom";

export const Header = (): JSX.Element => {
  const font = '"Roboto","Helvetica","Arial"';
  return (
    <AppBar>
      <Grid
        container
        display="flex"
        flexDirection="row"
        sx={{ background: "#1b1b1b;", fontFamily: font }}
      >
        <Grid
          item
          xs={3}
          py="1rem"
          px="0.5rem"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to={MOVIE_ROUTES.MOVIES_HOME} style={styles.logoHeader}>
            <span style={styles.movieLog}>Movie</span> Info
          </Link>

          <Link to={MOVIE_ROUTES.MOVIES_HOME} style={styles.container}>
            About
          </Link>
          <Link to={MOVIE_ROUTES.MOVIES_HOME} style={styles.container}>
            Terms of Service
          </Link>
        </Grid>

        <Grid
          item
          xs={9}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          px="4rem"
        ></Grid>
      </Grid>
    </AppBar>
  );
};

const styles = {
  container: {
    textDecoration: "none",
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  logoHeader: {
    textDecoration: "none",
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    marginLeft: "3rem",
  },
  movieLog: {
    color: "#0e76bc",
  },
};
