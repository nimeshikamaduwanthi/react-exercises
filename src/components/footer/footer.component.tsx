import { Box, Divider } from "@mui/material";
import { MOVIE_ROUTES } from "enums/routes.enums";
import { Link } from "react-router-dom";

export const Footer = (): JSX.Element => (
  <Box>
    <Divider sx={{ marginBottom: "1rem" }} />

    <Box style={styles.container} sx={{ justifyContent: "center" }}>
      <Box>
        ©2022
        <Link to={MOVIE_ROUTES.MOVIES_HOME} style={styles.link}>
          Movie Info
        </Link>
        , Netaktion LLC | All Rights Reserved
      </Box>
    </Box>
  </Box>
);

const font = '"Roboto","Helvetica","Arial"';
const styles = {
  container: {
    display: "flex",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: font,
    color: "#6c757d",
    letterSpacing: "0.1rem",
  },
  link: {
    textDecoration: "none",
    color: "#28a745",
  },
};
