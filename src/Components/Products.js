import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, STATUSES } from "../Store/productSlice";
import CardProduct from "./CardProduct";
import LinearBuffer from "./Loader";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from "react-loader-spinner";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === STATUSES.LOADING) {
    return <BallTriangle color="maroon" height={180} width={180} />;
  }

  if (status === STATUSES.ERROR) {
    return <h2> Something went wrong </h2>;
  }

  return (
    <>
      <h1 style={{ fontFamily: "monospace" }}>ALL PRODUCTS</h1>
      <Grid container>
        {products.map((product) => (
          <CardProduct
            product={product}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </Grid>
    </>
  );
};

export default Products;
