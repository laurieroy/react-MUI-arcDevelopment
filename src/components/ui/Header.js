import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  makeStyles,
  useScrollTrigger,
} from "@material-ui/core";
// import CssBaseline from "@material-ui/core/CssBaseline";

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
  logo: {
    height: "7em",
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
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
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
            <Tabs
              value={value}
              className={classes.tabContainer}
              indicatorColor="primary"
              onChange={handleChange}
            >
              <Tab
                className={classes.tab}
                label="Home"
                component={Link}
                to="/"
              />
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
              open={open}
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
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
