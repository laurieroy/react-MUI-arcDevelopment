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
	gridItem: {
		margin: "3em"
	},
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
		fontWeight: "bold",
		textDecoration: "none"
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
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid component={Link} to="/" item className={classes.link}>
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid className={classes.link} component={Link} to="/services" item>
              Services
            </Grid>
            <Grid className={classes.link} component={Link} to="/customSoftware" item>
              Custom Software Development
            </Grid>
            <Grid className={classes.link} component={Link} to="/mobileapps" item>
              Mobile Development
            </Grid>
            <Grid className={classes.link} component={Link} to="/websites" item>
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid className={classes.link} component={Link} to="/revolution"  item>
              The Revolution
            </Grid>
            <Grid className={classes.link} component={Link} to="/revolution" item>
              Vision
            </Grid>
            <Grid className={classes.link} component={Link} to="/revolution" item>
              Technology
            </Grid>
            <Grid className={classes.link} component={Link} to="/revolution" item>
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid className={classes.link} component={Link} to="/about" item>
              About Us
            </Grid>
            <Grid className={classes.link} component={Link} to="/about" item>
              History
            </Grid>
            <Grid className={classes.link} component={Link} to="/about" item>
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid className={classes.link} component={Link} to="/contact" item>
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
