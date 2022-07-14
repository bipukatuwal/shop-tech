import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { add, decrement, remove } from "../Store/cartSlice";
import { useState } from "react";

export default function CartProduct({ product }) {
  const items = useSelector((state) => state.cart);

  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    // add(product);
    dispatch(add(product));
  };
  const handleDecrement = () => {
    dispatch(decrement(product));
  };

  const handleRemove = (product) => {
    dispatch(remove(product));
  };

  return (
    <>
      <Grid>
        <Typography
          sx={{ fontWeight: "bold", marginLeft: "12px", marginTop: "12px" }}
        >
          Products added in cart
        </Typography>
        <Card
          sx={{
            width: "100%",
            height: "500px",
            margin: "12px",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid #b4b4cc",
            borderRadius: "8px",
            boxShadow: "5px 10px #abb3c7;",
          }}
        >
          <CardContent>
            <img src={product.image} alt="no-img" height={100} />

            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight="bold"
              fontFamily="serif"
            >
              Product : {product.title}
            </Typography>

            <Typography
              fontFamily="serif"
              fontWeight="bold"
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: "10px" }}
            >
              Price : {product.price}
            </Typography>
            <Typography
              fontWeight="bold"
              fontFamily="serif"
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: "10px" }}
            >
              Description : {product.description}
            </Typography>
            <CardActions>
              <Button
                onClick={(e) => handleIncrement(product)}
                sx={{
                  background: "maroon",
                  color: "white",
                  fontWeight: "bolder",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                +
              </Button>
              <Button
                sx={{
                  background: "maroon",
                  color: "white",
                  fontWeight: "bolder",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                {product.count}
              </Button>
              <Button
                onClick={(e) => handleDecrement(product)}
                sx={{
                  background: "maroon",
                  color: "white",
                  fontWeight: "bolder",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                -
              </Button>
              <Button
                onClick={() => handleRemove(product.id)}
                sx={{
                  background: "white",
                  color: "maroon",
                  width: "200px",
                  fontWeight: "bolder",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                REMOVE PRODUCT
              </Button>

              <Grid
                container
                display="center"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Grid item>
                  <Card
                    sx={{
                      height: "150px",
                      width: "300px",
                      background: "maroon",
                      marginRight: "12px",
                      marginTop: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    <CardContent>
                      <Typography color="white"> {product.title}</Typography>
                      <Typography color="white">
                        Pieces : {product.count}
                      </Typography>
                      <Typography color="white">
                        {" "}
                        Price : {product.count * product.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
