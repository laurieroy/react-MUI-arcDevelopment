import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import backArrow from "../assets/backArrow.svg";
import cash from "../assets/cash.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import stopwatch from "../assets/stopwatch.svg";

const useStyles = makeStyles((theme) => ({
  arrowContainer: {
    marginTop: "o.5em",
  },
  heading: {
    maxWidth: "40em",
  },
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em",
  },
}));

export default function CustomSoftware(props) {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item container direction="row">
        <Grid
          item
          className={classes.arrowContainer}
          style={{ marginRight: "1em", marginLeft: "-3.25em" }}
        >
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/services"
            onclick={() => props.setSelectedIndex(0)}
          >
            <img src={backArrow} alt="Back to Services Page" />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              corrupti maiores, culpa, ratione voluptatum magnam repudiandae
              ducimus ullam aliquid animi quod saepe at atque aspernatur iusto
              architecto dolorum. Veritatis, et?
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
              ducimus ullam aliquid animi quod saepe at atque aspernatur iusto
              architecto dolorum. Veritatis, et?
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              corrupti maiores, culpa, ratione voluptatum magnam repudiandae
              ducimus ullam aliquid animi quod saepe at atque aspernatur iusto
              architecto dolorum. Veritatis, et?
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/mobileApps"
            onclick={() => props.setSelectedIndex(2)}
          >
            <img
              src={forwardArrow}
              alt="Forward to ios/Android App Development Page"
            />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{ marginTop: "15em", marginBottom: "20em" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          style={{ maxWidth: "40em" }}
          alignItem="center"
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src="{lightbulb}" alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          style={{ maxWidth: "40em" }}
          alignItem="center"
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src="{stopwatch}" alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          style={{ maxWidth: "40em" }}
          alignItem="center"
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src="{cash}" alt="cash" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
