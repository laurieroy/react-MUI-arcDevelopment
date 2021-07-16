import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Hidden } from "@material-ui/core";

import facebook from "../../assets/facebook.svg";
import footerAdornment from "../../assets/Footer Adornment.svg";
import ig from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

const useStyles = makeStyles((theme) => ({
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em"
    }
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  mainContainer: {
    position: "absolute",
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em"
    }
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                to="/"
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(0);
                }}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                className={classes.link}
                component={Link}
                to="/services"
                item
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
              >
                Services
              </Grid>
              <Grid
                className={classes.link}
                component={Link}
                to="/customSoftware"
                item
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                className={classes.link}
                component={Link}
                to="/mobileapps"
                item
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
              >
                Mobile Development
              </Grid>
              <Grid
                className={classes.link}
                component={Link}
                to="/websites"
                item
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                className={classes.link}
                component={Link}
                to="/revolution"
                item
                onClick={() => {
                  props.setValue(2);
                }}
              >
                The Revolution
              </Grid>
              <Grid
                className={classes.link}
                component={Link}
                to="/revolution"
                item
                onClick={() => {
                  props.setValue(2);
                }}
              >
                Vision
              </Grid>
              <Grid
                className={classes.link}
                component={Link}
                to="/revolution"
                item
                onClick={() => {
                  props.setValue(2);
                }}
              >
                Technology
              </Grid>
              <Grid
                className={classes.link}
                component={Link}
                to="/revolution"
                item
                onClick={() => {
                  props.setValue(2);
                }}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                className={classes.link}
                component={Link}
                to="/about"
                item
                onClick={() => {
                  props.setValue(3);
                }}
              >
                About Us
              </Grid>
              <Grid
                className={classes.link}
                component={Link}
                to="/about"
                item
                onClick={() => {
                  props.setValue(3);
                }}
              >
                History
              </Grid>
              <Grid
                className={classes.link}
                component={Link}
                to="/about"
                item
                onClick={() => {
                  props.setValue(3);
                }}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                className={classes.link}
                component={Link}
                to="/contact"
                item
                onClick={() => {
                  props.setValue(4);
                }}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt="black decorative slash"
        className={classes.adornment}
        src={footerAdornment}
      />
      <Grid
        container
        className={classes.socialContainer}
        justify="flex-end"
        spacing={2}
      >
        <Grid
          item
          component={"a"}
          href="http://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={facebook} alt="facebook logo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={twitter} alt="twitter logo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={ig} alt="instagram logo" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}
