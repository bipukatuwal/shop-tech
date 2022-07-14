import React from "react";
import { Grid, Typography } from "@mui/material";
const Error = () => {
  return (
    <Grid
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "red",
      }}
    >
      <Typography variant="h3" fontFamily="fantasy">
        OOPS, PAGE NOT FOUND !!!
      </Typography>
    </Grid>
  );
};

export default Error;
