import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const About = (): JSX.Element => (
  <Box style={styles.mainContainer}>
    <Typography variant="h3" display="flex" justifyContent="center">
      About Us
    </Typography>
    <Box style={styles.boxConatiner}>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        dolorum labore quisquam vel id dicta fuga! Ducimus, quo. Dolore commodi
        aliquid error veritatis consequuntur, excepturi cumque fuga eum incidunt
        doloremque?
      </Typography>
    </Box>
    <Box style={styles.boxConatiner}>
      <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At qui enim
        rem totam voluptatum. Aut saepe temporibus, facilis ex a iste expedita
        minima dolorum dicta doloribus libero aliquid, quae maxime? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Fugiat suscipit beatae eum,
        est soluta ducimus ratione et impedit sapiente, nihil, atque dignissimos
        adipisci? Totam atque officia quis voluptates sed veniam?
      </Typography>
    </Box>
    <Box style={styles.boxConatiner}>
      <Typography>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
        voluptates quisquam possimus tenetur, dicta enim rerum quis, quaerat id
        nobis provident quo dolorum sapiente temporibus facere non repellendus
        consequatur cupiditate!
      </Typography>
    </Box>
  </Box>
);

const styles = {
  boxConatiner: {
    display: "flex",
    alignSelf: "center",
    padding: "1rem",
    lineHeight: "2rem",
    fontSize: 20,
    fontWeight: "500",
  },
  mainContainer: {
    height: "85vh",
    paddingTop: "6rem",
    alignItems: "center",
  },
};
