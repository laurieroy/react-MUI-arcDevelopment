import React, { useState } from "react";
import { Link } from "react-router-dom";

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
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    height: "45px",
    marginLeft: "50px",
    marginRight: "25px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
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
    "& .MuiListItemText-root": {
      opacity: 1,
    },
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
  const { value, setValue, selectedIndex } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  //  removed selectedIndex, value, SetValue and set as props since need in footer

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
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
    props.setSelectedIndex(i);
  };

  const menuOptions = [
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "Custom Software Development",
      link: "/customSoftware",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "iOS/Android App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
    }
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleClick(event)
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];

  const activeIndex = () => {
    //Checking to see if one of the routes has a link value that matches the current pathname
    //If it finds one then that route is passed to the indexOf to get the index of that route
    var found = routes.indexOf(
      routes.filter(({ link }) => link === window.location.pathname)[0]
    );
    //Then we need to check if we're at one of the menu options by doing the same logic
    //But since we want to set the services tab as active for any of the menu options we can just use .some
    //and that will check if at least one of them has a link matching the current pathname
    const menuFound = menuOptions.some(
      ({ link }) => link === window.location.pathname
    );

    //If that's the case and we are at one of the menu options, then we change the found index to 1 for the
    //services tab
    if (menuFound) {
      found = 1;
    }

    //If no matching route was found then found will be -1 and we will return false to clear the active tab
    //Otherwise we return the index
    return found === -1 ? false : found;
  }

  const tabs = (
    <>
      <Tabs
        className={classes.tabContainer}
        indicatorColor="primary"
        onChange={handleChange}
        value={activeIndex()}
      >
        {routes.map((route, index) => (
          <Tab
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            className={classes.tab}
            component={Link}
            key={`${route}${index}`}
            label={route.name}
            onMouseOver={route.mouseOver}
            to={route.link}
          />
        ))}
      </Tabs>
      <Button
        className={classes.button}
        color="secondary"
        component={Link}
        onClick={() => props.setValue(5)}
        to="/estimate"
        variant="contained"
      >
        Free Estimate
      </Button>
      <Menu
        anchorEl={anchorEl}
        classes={{ paper: classes.menu }}
        elevation={0}
        id="simple-menu"
        keepMounted
        MenuListProps={{ onMouseLeave: handleClose }}
        onClose={handleClose}
        open={openMenu}
        style={{ zIndex: 1302 }}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            classes={{ root: classes.menuItem }}
            component={Link}
            key={`${option}${i}`}
            onClick={(event) => {
              handleClose();
              handleMenuItemClick(event, i);
              setValue(i);
            }}
            selected={i === selectedIndex && value === 1}
            to={option.link}
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
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              button
              classes={{ selected: classes.drawerItemSelected }}
              component={Link}
              disableTypography
              divider
              key={`${route}${route.activeIndex}`}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeIndex);
              }}
              selected={props.value === route.activeIndex}
              to={route.link}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}

          <ListItem
            button
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            component={Link}
            disableTypography
            divider
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(5);
            }}
            selected={props.value === 5}
            to="/estimate"
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        disableRipple
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon}></MenuIcon>
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              component={Link}
              disableRipple
              onClick={() => props.setValue(0)}
              to="/"
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