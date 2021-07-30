import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Hidden, IconButton, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import backArrow from "../assets/backArrow.svg";
import cash from "../assets/cash.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import stopwatch from "../assets/stopwatch.svg";
import roots from "../assets/root.svg";

import automationAnimation from "../animations/automationAnimation/data.json";
import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";

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

export default function CustomSoftware(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  // prob need to change ths to xs
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
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
              to="/services"
              onClick={() => props.setSelectedIndex(0)}
            >
              <img src={backArrow} alt="Back to Services Page" />
            </IconButton>
          </Grid>
        </Hidden>

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
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/mobileApps"
              onClick={() => props.setSelectedIndex(2)}
            >
              <img
                src={forwardArrow}
                alt="Forward to ios/Android App Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{ marginTop: "15em", marginBottom: "20em" }}
        className={classes.rowContainer}
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
            <Typography variant="h4" align={matchesMD ? "center" : undefined}>
              Save Energy
            </Typography>
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
          style={{
            marginTop: matchesSM ? "10em" : 0,
            marginBottom: matchesSM ? "10em" : 0,
            maxWidth: "40em",
          }}
          alignItem="center"
        >
          <Grid item>
            <Typography variant="h4" align={matchesMD ? "center" : undefined}>
              Save Time
            </Typography>
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
            <Typography variant="h4" align={matchesMD ? "center" : undefined}>
              Save Money
            </Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
      </Grid>
      {/* documents row */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-between"
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
        >
          <Grid item container directon="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : undefined}
                paragraph
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur, dicta!
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : undefined}
                paragraph
              >
                Lorem ipsum dolrepellat ipsam impedit nam accusamus nemo
                voluptatibus. Facilis?
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : undefined}
                paragraph
              >
                Aliquid asperiores cumque iste vel ratione praesentium
                perspiciatis sed consectetur perferendis eos earum voluptatibus
                a, quaerat veritatis iure eum nostrum.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            {/*temp add isStopped prop */}
            <Lottie
              options={documentsOptions}
              isStopped={true}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item md>
            {/*temp add isStopped prop */}
            <Lottie
              options={scaleOptions}
              isStopped={true}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container directon="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur, dicta!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* roots row */}
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: "20em", marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src={roots}
              alt="tree with roots extending out"
              height={matchesSM ? "300em" : "450em"}
              width={matchesSM ? "300em" : "450em"}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" gutterBottom align="center">
              Root-Cause Analysis
            </Typography>
            <Typography variant="body1" paragraph align="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Typography variant="body1" paragraph align="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* automation row */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-between"
        style={{ marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
        >
          <Grid item container directon="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur, dicta!
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Lorem ipsum dolrepellat ipsam impedit nam accusamus nemo
                voluptatibus. Facilis?
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Aliquid asperiores cumque iste vel ratione praesentium
                perspiciatis sed consectetur perferendis eos earum voluptatibus
                a, quaerat veritatis iure eum nostrum.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            {/*temp add isStopped prop */}
            <Lottie
              options={automationOptions}
              isStopped={true}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item md>
            {/*temp add isStopped prop */}
            <Lottie
              options={uxOptions}
              isStopped={true}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container directon="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur, dicta!
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur, dicta!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
