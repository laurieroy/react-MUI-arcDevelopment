import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
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
			backgroundColor: "transparent"
		}
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

  const handleChange = (e, value) => {
    setValue(value);
  };
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
                className={classes.tab}
                label="Services"
                component={Link}
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
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
