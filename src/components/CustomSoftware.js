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
import documentsAnimation from "../animations/documentsAnimation";
import scaleAnimation from "../animations/scaleAnimation";

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
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em",
  },
}));

export default function CustomSoftware(props) {
  const classes = useStyles();

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
            <img src={lightbulb} alt="lightbulb" />
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
            <img src={stopwatch} alt="stopwatch" />
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
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="row">
        <Grid item container className={classes.itemContainer}>
          <Grid item container directon="column" md>
            <Grid item>
              <Typography variant="h4">Digital Documents & Data</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur, dicta!
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolrepellat ipsam impedit nam accusamus nemo
                voluptatibus. Facilis?
              </Typography>
              <Typography variant="body1" paragraph>
                Aliquid asperiores cumque iste vel ratione praesentium
                perspiciatis sed consectetur perferendis eos earum voluptatibus
                a, quaerat veritatis iure eum nostrum.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            {/*temp add isStopped prop */}
            <Lottie
              options={scaleOptions}
              isStopped={true}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        <Grid item container className={classes.itemContainer}>
          <Grid item md>
            {/*temp add isStopped prop */}
            <Lottie
              options={documentsOptions}
              isStopped={true}
              style={{ maxHeight: 325, maxWidth: 275, minHeight: 275 }}
            />
          </Grid>
          <Grid item container directon="column" md>
            <Grid item>
              <Typography variant="h4" align="right">
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align="right">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur, dicta!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
