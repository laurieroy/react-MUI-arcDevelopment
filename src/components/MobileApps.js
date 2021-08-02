import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Hidden, IconButton, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import access from "../assets/extendAccess.svg";
import backArrow from "../assets/backArrow.svg";
import engagement from "../assets/extendAccess.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import swiss from "../assets/swissKnife.svg";

import integrationAnimation from "../animations/integrationAnimation/data.json";

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  arrowContainer: {
    marginTop: "o.5em",
  },
  heading: {
    maxWidth: "40em",
  },
  itemContainer: {
    maxWidth: "40em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

export default function MobileApps(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.25em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/customSoftware"
              onClick={() => props.setSelectedIndex(1)}
            >
              <img src={backArrow} alt="Back to Custom Software Page" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2">ios/Android App Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              corrupti maiores, culpa, ratione voluptatum magnam repudiandae
              ducimus ullam aliquid animi quod saepe at atque aspernatur iusto
              architecto dolorum. Veritatis, et?
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              corrupti maiores, culpa, ratione voluptatum magnam repudiandae
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/websites"
              onClick={() => props.setSelectedIndex(3)}
            >
              <img
                src={forwardArrow}
                alt="Forward to Website Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        // md
        style={{ marginTop: "15em", marginBottom: "15em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="h4"
              gutterbottom
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body1"
              paragraph
            >
              culpa, ratione voluptatum magnam repudiandae
            </Typography>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body1"
              paragraph
            >
              amet consectetur adipisicing elit. Quibusdam culpa, ratione
              voluptatum magnam repudiandae
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: "20em" }}
            isStopped={true}
          />
        </Grid>

        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          md
          style={{ marginTop: "15em", marginBottom: "15em" }}
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesSM ? "center" : "right"}
              gutterbottom
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="body1"
              paragraph
            >
              culpa, ratione voluptatum magnam Quibusdam culpa, repudiandae
            </Typography>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="body1"
              paragraph
            >
              amet consectetur adipisicing elit. ratione voluptatum magnam
              repudiandae
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchesMD ? "column" : "row"}
        style={{ marginBottom: "15em" }}
      >
        <Grid
          item
          direction="column"
          alignItems="center"
          md
          style={{
            marginTop: matchesMD ? "10em" : 0,
            marginBottom: matchesMD ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt="swiss army knife" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          md
          style={{
            marginTop: matchesMD ? "10em" : 0,
            marginBottom: matchesMD ? "10em" : 0,
          }}
        >
          <Grid item alignItems="center">
            <Typography variant="h4" align="center" gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={access}
              alt="tear-one-off-sign"
              style={{ maxWidth: matchesXS ? "20em" : "28em" }}
            />
          </Grid>
        </Grid>
        <Grid item direction="column" alignItems="center" md>
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagement} alt="app with notification" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
