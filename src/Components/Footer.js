import React from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const CustomizedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7e6e6;
  color: white;
  height: 300px;
  position: relative;
  margin-top: 30px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const BoxCustom = styled(Box)`
  & > *:not(:first-child) {
    padding-top: 10px;
  }
  & > *:nth-child(2) {
    padding-left: 10px;
  }
  & > *:nth-child(3) {
    padding-left: 10px;
  }
  & > *:nth-child(4) {
    padding-left: 10px;
  }
`;
const BoxCustomTwo = styled(Box)`
  & > *:not(:first-child) {
    padding-top: 10px;
  }
`;
const BoxCustomThree = styled(Box)`
  & > *:not(:first-child) {
    padding-top: 10px;
  }
`;
const BoxCustomFour = styled(Box)`
  & > *:not(:first-child) {
    padding-top: 10px;
  }
`;

const Footer = () => {
  return (
    <>
      <CustomizedDiv>
        <Grid
          maxWidth="false"
          container
          justify="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={3}>
            <BoxCustom
              style={{ marginLeft: "30%", color: "gray", fontSize: "5px" }}
            >
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <YouTubeIcon />
              <Typography>Help Center</Typography>
              <Typography>Media Centre</Typography>
              <Typography>Privacy</Typography>
              <Typography>Contact Us </Typography>
              <Button
                style={{
                  color: "gray",
                  border: "1px solid gray",
                  marginTop: "10px",
                }}
              >
                SERVICE CODE
              </Button>
            </BoxCustom>
          </Grid>
          <Grid item xs={3} style={{ color: "gray" }}>
            <BoxCustomTwo>
              <Typography>Help Center</Typography>
              <Typography>Investor Relations</Typography>
              <Typography>Legal Notices</Typography>
            </BoxCustomTwo>
          </Grid>
          <Grid item xs={3} style={{ color: "gray" }}>
            <BoxCustomThree>
              <Typography>Help Centre</Typography>
              <Typography>Jobs</Typography>
              <Typography>Cookie Preferences</Typography>
            </BoxCustomThree>
          </Grid>
          <Grid item xs={3} style={{ color: "gray" }}>
            <BoxCustomFour>
              <Typography>Gift Cards</Typography>
              <Typography>Terms of Use</Typography>
              <Typography>Corporate Information</Typography>
            </BoxCustomFour>
          </Grid>
        </Grid>
      </CustomizedDiv>
      <div style={{ height: "50px", background: "black", color: "gray" }}>
        <Typography
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          &copy; 2010 ShopCart, Inc.{" "}
        </Typography>
      </div>
    </>
  );
};

export default Footer;
