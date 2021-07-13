import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  makeStyles,
  useScrollTrigger,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

// import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
// import Box from "@material-ui/core/Box";
// import Container from "@material-ui/core/Container";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    height: "45px",
    marginLeft: "50px",
    marginRight: "25px",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerIconContainer: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    marginLeft: "auto",
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
    height: "7em",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  tab: {
    ...theme.typography.tab,
    marginLeft: "25px",
    minWidth: 10,
  },
  tabContainer: {
    marginLeft: "auto",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customSoftware" },
    { name: "Mobile App Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" },
  ];

  // NOTE: this is refactored later in the course, so I'm adding what he has to make it simpler to follow along
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 0) {
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 0) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 0) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 0) {
      setValue(4);
    } else if (window.location.pathname === "/estimate" && value !== 0) {
      setValue(5);
    }

    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;

      case "/services":
        if (value !== 0) {
          setValue(1);
        }
        break;

      case "/customSoftware":
        if (value !== 0) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;

      case "/mobile":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;

      case "/websites":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;

      case "/revolution":
        if (value !== 2) {
          setValue(2);
        }
        break;

      case "/about":
        if (value !== 3) {
          setValue(3);
        }
        break;

      case "/contact":
        if (value !== 4) {
          setValue(4);
        }
        break;

      case "/estimate":
        if (value !== 5) {
          setValue(5);
        }
        break;

      default:
        break;
    }
  }, [value]);

  const tabs = (
    <>
      <Tabs
        value={value}
        className={classes.tabContainer}
        indicatorColor="primary"
        onChange={handleChange}
      >
        <Tab className={classes.tab} label="Home" component={Link} to="/" />
        <Tab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          className={classes.tab}
          label="Services"
          component={Link}
          onMouseOver={(event) => handleClick(event)}
          to="/services"
        />
        <Tab
          className={classes.tab}
          label="The Revolution"
          component={Link}
          to="/revolution"
        />
        <Tab
          className={classes.tab}
          label="About Us"
          component={Link}
          to="/about"
        />
        <Tab
          className={classes.tab}
          label="Contact Us"
          component={Link}
          to="/contact"
        />
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link}
        to="/estimate"
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={setOpenMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={option}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              setValue(1);
              handleClose();
            }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        classes={{ paper: classes.drawer }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <List disablePadding>
          <ListItem
            button
            disableTypography
            divider
            component={Link}
            selected={value === 0}
            to="/"
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
          >
            <ListItemText
              className={
                value === 0
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            disableTypography
            component={Link}
            selected={value === 1}
            to="/services"
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
          >
            <ListItemText
              className={
                value === 1
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
            >
              Services
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            disableTypography
            component={Link}
            selected={value === 2}
            to="/revolution"
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
          >
            <ListItemText
              className={
                value === 2
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
            >
              The Revolution
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            disableTypography
            component={Link}
            selected={value === 3}
            to="/about"
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
          >
            <ListItemText
              className={
                value === 3
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
            >
              About Us
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            disableTypography
            component={Link}
            selected={value === 4}
            to="/contact"
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
          >
            <ListItemText
              className={
                value === 4
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
            >
              Contact Us
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            className={classes.drawerItemEstimate}
            disableTypography
            component={Link}
            selected={value === 5}
            to="/estimate"
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
          >
            <ListItemText
              className={
                value === 5
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon}></MenuIcon>
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple
            >
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
