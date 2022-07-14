import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../Components/CartProduct";

const Cart = () => {
  const products = useSelector((state) => state.cart);

  return (
    <>
      <Grid container sx={{ marginTop: "42px" }}>
        {products.map((product) => (
          <CartProduct product={product} />
        ))}
      </Grid>
    </>
  );
};

export default Cart;
