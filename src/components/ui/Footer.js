import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import footerAdornment from "../../assets/Footer Adornment.svg";

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
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
  },
  mainContainer: {
    position: "absolute",
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid className={classes.link} item>
              Services
            </Grid>
            <Grid className={classes.link} item>
              Custom Software Devlopment
            </Grid>
            <Grid className={classes.link} item>
              Movile Devlopment
            </Grid>
            <Grid className={classes.link} item>
              Website Devlopment
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid className={classes.link} item>
              The Revolution
            </Grid>
            <Grid className={classes.link} item>
              Vision
            </Grid>
            <Grid className={classes.link} item>
              Technology
            </Grid>
            <Grid className={classes.link} item>
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid className={classes.link} item>
              About Us
            </Grid>
            <Grid className={classes.link} item>
              History
            </Grid>
            <Grid className={classes.link} item>
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid className={classes.link} item>
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        alt="black decorative slash"
        className={classes.adornment}
        src={footerAdornment}
      />
    </footer>
  );
}
