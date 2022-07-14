import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";

export default function CardProduct({ title, image, price, product }) {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      <Card
        sx={{
          margin: "12px",
          padding: "12px",
          width: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid #b4b4cc",
          borderRadius: "8px",
          boxShadow: "5px 10px #abb3c7;",
          marginLeft: "130px",
        }}
      >
        <CardContent>
          <img src={image} alt="img" height={100} />

          <Typography variant="body2" color="text.secondary">
            Product : {title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: "10px" }}
          >
            Price : {price}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            onClick={() => handleAdd(product)}
            sx={{
              background: "maroon",
              color: "white",
              fontWeight: "bolder",
            }}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
