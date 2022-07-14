import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
const Login = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(actualData.email);

    if (actualData.email === "admin" && actualData.password === "admin") {
      setError({ status: true, msg: "Login Successful", type: "success" });
      navigate("/");
    } else {
      setError({
        status: true,
        msg: "Email and Password didn't matched (Username : admin, Password : admin) ",
        type: "error",
      });
    }
  };

  return (
    <Grid
      style={{
        height: "600px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <Grid container sx={{ alignItems: "center", justifyContent: "center" }}>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1, height: "350px" }}
          id="login-form"
          onSubmit={handleSubmit}
        >
          <Card
            sx={{
              boxShadow: "5px 10px 6px maroon",
              width: "500px",
              marginTop: "-30px",
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
                sx={{
                  fontSize: "30px",
                  fontFamily: "fantasy",
                  color: "maroon",
                }}
              >
                LOGIN
              </Typography>
              <Grid item>
                <TextField
                  id="email"
                  name="email"
                  label="Email Address"
                  autocomplete="on"
                  aria-label="minimum height"
                  variant="outlined"
                  sx={{ width: "25rem" }}
                >
                  {" "}
                </TextField>
                <Grid />
                <Grid item sx={{ marginTop: "12px" }}>
                  <TextField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    autocomplete="on"
                    aria-label="minimum height"
                    variant="outlined"
                    sx={{ width: "25rem", fontSize: "21px", color: "red" }}
                  >
                    {" "}
                  </TextField>
                </Grid>
                {error.status ? (
                  <Alert severity={error.type}>{error.msg}</Alert>
                ) : (
                  " "
                )}
              </Grid>
            </CardContent>

            <CardActions>
              <Grid
                container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  margin: "2px",
                  padding: "2px",
                }}
              >
                <Grid item mt={2} xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      background: "maroon",
                      borderRadius: "8px",
                      marginLeft: "15px",
                    }}
                  >
                    LOGIN
                  </Button>
                </Grid>
                <Grid item mt={2}>
                  <Button
                    sx={{
                      background: "maroon",
                      borderRadius: "8px",
                      color: "white",
                      width: "120%",
                    }}
                  >
                    Gmail <GoogleIcon />
                  </Button>
                  <Grid item mt={2}>
                    {" "}
                    <Button
                      sx={{
                        background: "maroon",
                        borderRadius: "8px",
                        color: "white",
                        width: "120%",
                      }}
                    >
                      FACEBOOK <FacebookIcon />
                    </Button>
                  </Grid>
                </Grid>
                <p>
                  Don't Have an Account?
                  <NavLink to="/register"> Sign up now </NavLink>
                </p>
              </Grid>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
