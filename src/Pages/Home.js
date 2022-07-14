import { Grid, Typography } from "@mui/material";
import React from "react";
import Image from "../Images/b.jpg";
import Image3 from "../Images/kk.webp";
import styled from "@emotion/styled";
import HomeSliderOne from "../Components/HomeSliderOne";
import HomeSliderTwo from "../Components/HomeSliderTwo";
import Categories from "../Components/Categories";

const CustomizedImage = styled.img`
  width: 73%;
  height: 500px;
  margin-top: 0px;
  position: absolute;
`;
const CustomizedImage2 = styled.img`
  width: 73%;
  height: 500px;
  margin-top: 0px;
  position: absolute;
  z-index: -1;
`;
const CustomizedDiv = styled.div`
  margin-top: 40%;
  margin-right: 51%;
  border: 8px solid white;
  border-radius: 12px;
  box-shadow: 5px 10px rgb(209 81 81 / 87%);

  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;

  position: relative;

  @keyframes example {
    0% {
      background-color: red;
      left: 0px;
      top: 0px;
    }
    25% {
      background-color: Tomato;
      left: 400px;
      top: 0px;
    }
    /*     50% {
      background-color: Violet;
      left: 100px;
      top: 25px;
    }
    75% {
      background-color: Orange;
      left: 0px;
      top: 25px;
    } */
    100% {
      background-color: red;
      left: 0px;
      top: 0px;
    }
  }
`;

const Home = () => {
  return (
    <>
      <Grid
        container
        sx={{
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Grid
          item
          xs={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Categories />
          <CustomizedImage2 src={Image3} alt="imag" />
        </Grid>
        <Grid item xs={8} display="flex" justifyContent="flex-end">
          <CustomizedImage src={Image} alt="img" />
          <CustomizedDiv>
            <Typography
              sx={{
                fontWeight: "bolder",
                fontFamily: "cursive",
                fontSize: "4rem",
              }}
            >
              GET 50%
            </Typography>
            <Typography
              sx={{
                fontWeight: "bolder",
                fontSize: "5rem",
                marginLeft: "20%",
              }}
            >
              OFF
            </Typography>
          </CustomizedDiv>
        </Grid>
      </Grid>

      <HomeSliderOne />
      <HomeSliderTwo />
    </>
  );
};

export default Home;
