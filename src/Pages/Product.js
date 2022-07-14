import { Grid } from "@mui/material";
import React from "react";
import Products from "../Components/Products";

const Product = () => {
  return (
    <>
      <Grid container justifyContent="center" alignItems="center" marginTop={6}>
        <Products />
      </Grid>
    </>
  );
};

export default Product;
