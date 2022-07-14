import React, { useEffect } from "react";
import styled from "@emotion/styled";
import Carousel from "react-elastic-carousel";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Store/productSlice";
import { CardContent } from "@mui/material";

const CustomizedImage = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 500px;
  margin-right: 10px;
  &:hover {
    transform: scale(1.08);
  }
`;

const HomeSlider = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 8 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <>
      <div style={{ background: " #692b2b" }}>
        <Typography
          style={{
            color: "white",
            fontSize: "2rem",
            marginLeft: "5%",
            fontWeight: "bold",
            position: "relative",
            padding: "12px",
          }}
        >
          COLLECTIONS
        </Typography>

        <Carousel breakPoints={breakPoints}>
          {products.map((product) => {
            return (
              <Card
                sx={{
                  margin: "12px",
                  padding: "12px",
                  width: "300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: "2px solid MAROON",
                  borderRadius: "8px",
                }}
              >
                <CardContent>
                  <CustomizedImage src={product.image} alt="img" height={100} />

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: "10px", fontFamily: "fantasy" }}
                  >
                    Price : {product.price}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default HomeSlider;
