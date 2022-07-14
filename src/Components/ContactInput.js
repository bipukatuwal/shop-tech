import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const ContactInput = () => {
  const [data, setData] = useState({
    emailData: " ",
    phoneData: " ",
    messageData: "",
  });
  const url = "http://localhost:8000/create";

  const handle = (e) => {
    const newData = { ...data };
    setData(newData);
    setData((data) => ({
      ...data,
      [e.target.id]: e.target.value,
    }));
  };
  var a;

  const handleClick = (e) => {
    if (e) e.preventDefault();

    axios
      .post(url, {
        emailData: data.emailData,
        phoneData: data.phoneData,
        messageData: data.messageData,
      })
      .then((res) => {
        toast.success("Successfully Submitted", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
          style: { background: "maroon", color: "white" },
        });
      })
      .catch((err) => {
        /*     toast.error("Error on submitting", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
          delay: 1000,
          style: { background: "red", color: "white" },
        }); */
        a = err;
      });
    console.log(data.emailData);
  };

  return (
    <Grid container sx={{ alignItems: "center", justifyContent: "center" }}>
      <Card
        sx={{
          boxShadow: "5px 10px 6px maroon",
          width: "500px",
          height: "400px",
          marginTop: "20px",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: "30px", fontFamily: "fantasy", color: "maroon" }}
          >
            Contact Us
          </Typography>
          <Typography> {a} </Typography>
          <Grid item>
            <TextField
              onChange={(e) => handle(e)}
              id="emailData"
              value={data.emailData}
              type="email"
              label="Enter your email address"
              variant="outlined"
              sx={{ width: "25rem" }}
            >
              {" "}
            </TextField>

            <Grid item sx={{ marginTop: "12px" }}>
              <TextField
                onChange={(e) => handle(e)}
                id="phoneData"
                value={data.phoneData}
                label="Enter your phone number"
                variant="outlined"
                sx={{ width: "25rem", fontSize: "21px", color: "red" }}
                onKeyPress={(e) => {
                  if (!/\d/.test(e.key)) return e.preventDefault();
                }}
              >
                {" "}
              </TextField>
            </Grid>
            <Grid item sx={{ marginTop: "12px" }}>
              <TextareaAutosize
                onChange={(e) => handle(e)}
                id="messageData"
                value={data.messageData}
                aria-label="minimum height"
                minRows={6}
                placeholder="Enter your Message"
                style={{
                  width: 393,
                  fontSize: "16px",
                  height: "90px",
                  paddingLeft: "12px",
                  paddingTop: "12px",
                  fontFamily: "sans-serif",
                  resize: "none",
                }}
              />
            </Grid>
          </Grid>
        </CardContent>

        <CardActions sx={{ alignItems: "center", justifyContent: "center" }}>
          <Grid sx={{ margin: "12px" }}>
            <Button
              onClick={handleClick}
              variant="contained"
              size="small"
              sx={{ background: "maroon", width: "20%", borderRadius: "8px" }}
            >
              Submit
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ContactInput;
