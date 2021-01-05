import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.black,
  },
}));

export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons='off'
          aria-label='scrollable prevent tabs example'
        >
          <Tab icon={<PhoneIcon />} aria-label='phone' {...a11yProps(0)} />
          <Tab
            icon={<FavoriteIcon />}
            aria-label='favorite'
            {...a11yProps(1)}
          />
          <Tab icon={<PersonPinIcon />} aria-label='person' {...a11yProps(2)} />
          <Tab icon={<HelpIcon />} aria-label='help' {...a11yProps(3)} />
          <Tab
            icon={<ShoppingBasket />}
            aria-label='shopping'
            {...a11yProps(4)}
          />
          <Tab icon={<ThumbDown />} aria-label='up' {...a11yProps(5)} />
          <Tab icon={<ThumbUp />} aria-label='down' {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CssBaseline />
        <Container fixed>
          <h1>Need Help</h1>
          <Typography
            component='div'
            style={{
              backgroundColor: "#FFFFFF",
              height: "100vh",
              width: "100%",
            }}
          />
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CssBaseline />
        <Container fixed>
          <h1>Favourites</h1>
          <Typography
            component='div'
            style={{
              backgroundColor: "#FFFFFF",
              height: "100vh",
              width: "100%",
            }}
          />
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CssBaseline />
        <Container fixed>
          <h1>Profile</h1>
          <Typography
            component='div'
            style={{
              backgroundColor: "#808080",
              height: "100vh",
              width: "100%",
              textEmphasisColor: "black",
              alignContent: "center",
            }}
          >
            This is the profile of the user where he can add the product he want
            to sell and post the product to shopping page.
          </Typography>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CssBaseline />
        <Container fixed>
          <h1>About</h1>
          <Typography
            component='div'
            style={{
              backgroundColor: "#FFFFFF",
              height: "100vh",
              width: "100%",
            }}
          />
        </Container>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CssBaseline />
        <Container fixed>
          <h1>Shopping</h1>
          <Typography
            component='div'
            style={{
              backgroundColor: "#FFFFFF",
              height: "100vh",
              width: "100%",
            }}
          ></Typography>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <CssBaseline />
        <Container fixed>
          <h1>Dislikes</h1>
          <Typography
            component='div'
            style={{
              backgroundColor: "#FFFFFF",
              height: "100vh",
              width: "100%",
            }}
          />
        </Container>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <CssBaseline />
        <Container fixed>
          <h1>Likes</h1>
          <Typography
            component='div'
            style={{
              backgroundColor: "#FFFFFF",
              height: "100vh",
              width: "100%",
            }}
          />
        </Container>
      </TabPanel>
    </div>
  );
}
