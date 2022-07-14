import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Grid } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import logo2 from "../Images/logo2.png";
import MailIcon from "@mui/icons-material/Mail";
export default function Navbar() {
  const items = useSelector((state) => state.cart); //which elements to subscribe

  const navigate = useNavigate();

  const handleLogout = (e) => {
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          background: "linear-gradient(310deg, #333333, rgb(209 81 81 / 87%))",
          height: "50px",
        }}
      >
        <Toolbar>
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            {" "}
            <Typography
              sx={{
                background: "white",
                color: "maroon",
                fontFamily: "",
                fontSize: "25px",
                marginBottom: "12px",
                border: "2px solid black",
                textDecoration: "none",
              }}
            >
              {" "}
              SHOP{" "}
              <span style={{ background: "maroon", color: "white" }}>TECH</span>
            </Typography>
          </Link>

          <Grid sx={{ flexGrow: 1 }}>
            <Grid
              item
              sx={{
                display: "flex",
                padding: "12px",
                float: "right",
                marginBottom: "12px",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <Typography
                  component="div"
                  sx={{
                    paddingLeft: "10px",
                    fontFamily: "monospace",
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  Home
                </Typography>
              </Link>

              <Link
                to="/product"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography
                  component="div"
                  sx={{
                    paddingLeft: "10px",
                    fontFamily: "monospace",
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  Products
                </Typography>
              </Link>

              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography
                  component="div"
                  sx={{
                    paddingLeft: "10px",
                    fontFamily: "monospace",
                  }}
                >
                  Contact
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit" sx={{ marginBottom: "12px" }}>
              <Badge
                badgeContent={items.length}
                color="primary"
                sx={{ color: "white" }}
              >
                <AddShoppingCartIcon color="white" />
              </Badge>
            </Button>
          </Link>
          <Button
            onClick={handleLogout}
            color="inherit"
            sx={{ marginBottom: "12px" }}
          >
            LOGOUT
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
