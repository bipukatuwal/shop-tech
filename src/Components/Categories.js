import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Categories() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container display="flex" sx={{ background: "#f6f6f6" }}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            height: 224,
            background: "maroon",
            color: "white",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              background: "whitesmoke",
              color: "black",
              borderRight: 1,
              borderColor: "black",
            }}
          >
            <Tab label="Woman's Fashion" {...a11yProps(0)} />
            <Tab label="Men's Fashion" {...a11yProps(1)} />
            <Tab label="Kids Zone" {...a11yProps(2)} />
            <Tab label="Item Four" {...a11yProps(3)} />
            <Tab label="Item Five" {...a11yProps(4)} />
            <Tab label="Item Six" {...a11yProps(5)} />
            <Tab label="Item Seven" {...a11yProps(6)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Grid item sx={{}}>
              <Typography
                sx={{ pb: 2, fontFamily: "system-ui", fontWeight: "" }}
              >
                {" "}
                Clothing
              </Typography>
              <Typography
                sx={{ pb: 2, fontFamily: "system-ui", fontWeight: "" }}
              >
                {" "}
                Tradional Clothing
              </Typography>
              <Typography
                sx={{ pb: 2, fontFamily: "system-ui", fontWeight: "" }}
              >
                {" "}
                Woman's bag
              </Typography>
              <Typography
                sx={{ pb: 2, fontFamily: "system-ui", fontWeight: "" }}
              >
                {" "}
                Shoes
              </Typography>
              <Typography
                sx={{ pb: 2, fontFamily: "system-ui", fontWeight: "" }}
              >
                {" "}
                Accessories
              </Typography>
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Grid itemID="">
              {" "}
              <Typography
                sx={{ pb: 2, fontFamily: "system-ui", fontWeight: "" }}
              >
                {" "}
                Tradional Clothing
              </Typography>
              <Typography
                sx={{ pb: 2, fontFamily: "system-ui", fontWeight: "" }}
              >
                {" "}
                Accessories
              </Typography>
              <Typography
                sx={{ pb: 2, fontFamily: "system-ui", fontWeight: "" }}
              >
                Clothing
              </Typography>
              <Typography
                sx={{ pb: 2, fontFamily: "system-ui", fontWeight: "" }}
              >
                {" "}
                Shoes
              </Typography>
              <Typography
                sx={{ pb: 2, fontFamily: "system-ui", fontWeight: "" }}
              >
                {" "}
                Man's bag
              </Typography>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography sx={{ pb: 2, fontFamily: "system-ui", fontWeight: "" }}>
              {" "}
              Tradional Clothing
            </Typography>
            <Typography sx={{ pb: 2, fontFamily: "system-ui", fontWeight: "" }}>
              {" "}
              Clothing
            </Typography>
            <Typography sx={{ pb: 2, fontFamily: "system-ui", fontWeight: "" }}>
              {" "}
              Shoes
            </Typography>
            <Typography sx={{ pb: 2, fontFamily: "system-ui", fontWeight: "" }}>
              {" "}
              Kid's bag
            </Typography>
            <Typography sx={{ pb: 2, fontFamily: "system-ui", fontWeight: "" }}>
              {" "}
              Accessories
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>
        </Box>
      </Grid>
    </>
  );
}
