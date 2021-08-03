import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Hidden, IconButton, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import backArrow from "../assets/backArrow.svg";
import build from "../assets/buildIcon.svg";
import consultation from "../assets/consultationIcon.svg";
import design from "../assets/designIcon.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import iterate from "../assets/iterateIcon.svg";
import launch from "../assets/launchIcon.svg";
import moaintain from "../assets/maintainIcon.svg";
import mockup from "../assets/mockupIcon.svg";
import review from "../assets/reviewIcon.svg";
import technology from "../animations/technologyAnimation/data.json";
import vision from "../assets/vision.svg";

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
  paragraphContainer: {
    maxWidth: "30em",
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

export default function Revolution(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid
        item
        className={classes.rowContainer}
        container
        direction="row"
        style={{ marginTop: "2em" }}
      >
        <Typography variant="h2" style={{ fontFamily: "Pacifico" }}>
          The Revolution
        </Typography>
      </Grid>
      <Grid item container alignItems="center" className={classes.rowContainer}>
        <Grid item lg>
          <img
            src={vision}
            alt="mountain through binoculars"
            style={{ maxWidth: "40em", marginRight: "5em" }}
          />
        </Grid>
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography variant="h4" align="right" gutterBottom>
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align="right" paragraph>
              lorem
            </Typography>
            <Typography variant="body1" align="right" paragraph>
              lorem
            </Typography>
            <Typography variant="body1" align="right" paragraph>
              lorem
            </Typography>
            <Typography variant="body1" align="right" paragraph>
              lorem
            </Typography>
            <Typography variant="body1" align="right" paragraph>
              lorem
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        className={classes.rowContainer}
        container
        direction="row"
        style={{ marginTop: "2em" }}
      >
        <Typography variant="h2" style={{ fontFamily: "Pacifico" }}>
          The Revolution
        </Typography>
      </Grid>
      <Grid item container alignItems="center" className={classes.rowContainer}>
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              lorem
            </Typography>
            <Typography variant="body1" paragraph>
              lorem
            </Typography>
            <Typography variant="body1" paragraph>
              lorem
            </Typography>
            <Typography variant="body1" paragraph>
              lorem
            </Typography>
            <Typography variant="body1" paragraph>
              lorem
            </Typography>
            <Typography variant="body1" paragraph>
              lorem
            </Typography>
            <Typography variant="body1" paragraph>
              lorem
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justify="flex-end" lg>
          <Lottie
            options={defaultOptions}
            isStopped={true}
            style={{ maxWidth: "40em", margin: 0 }}
          />
        </Grid>
      </Grid>

      <Grid item container className={classes.rowContainer} justify="center">
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ backgroundColor: "#B3B3B3", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Officiis temporibus blanditiis totam, commodi quasi explicabo
              aliquam illo, eligendi corporis reiciendis ea provident?{" "}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Temporibus soluta exercitationem dignissimos expedita, officia
              voluptatum quisquam!
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={consultation} alt="handshake" />
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ backgroundColor: "#ff7373", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Officiis temporibus blanditiis totam, commodi quasi explicabo
              aliquam illo, eligendi corporis reiciendis ea provident?{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={mockup} alt="basic website design outline" />
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ backgroundColor: "#39b54a", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Officiis temporibus blanditiis totam, commodi quasi explicabo
              aliquam illo, eligendi corporis reiciendis ea provident?{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={review} alt="magnifying glass" />
        </Grid>
      </Grid>
      {/*
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ backgroundColor: "#B3B3B3", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Officiis temporibus blanditiis totam, commodi quasi explicabo
              aliquam illo, eligendi corporis reiciendis ea provident?{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={review} alt="magnifying glass" />
        </Grid>
      </Grid>
	*/}

      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ backgroundColor: "A67C52", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Officiis temporibus blanditiis totam, commodi quasi explicabo
              aliquam illo, eligendi corporis reiciendis ea provident?{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={design} alt="paintbrush leaving stroke of paint" />
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ backgroundColor: "#39b54a", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Officiis temporibus blanditiis totam, commodi quasi explicabo
              aliquam illo, eligendi corporis reiciendis ea provident?{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={review} alt="magnifying glass" />
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ backgroundColor: "#fbb03b", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Officiis temporibus blanditiis totam, commodi quasi explicabo
              aliquam illo, eligendi corporis reiciendis ea provident?{" "}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Officiis temporibus blanditiis totam, commodi quasi explicabo
              aliquam illo, eligendi corporis reiciendis ea provident?{" "}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Officiis temporibus blanditiis totam, commodi quasi explicabo
              aliquam illo, eligendi corporis reiciendis ea provident?{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={build} alt="building construction site" />
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ backgroundColor: "#C1272D", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Officiis temporibus blanditiis totam, commodi quasi explicabo
              aliquam illo, eligendi corporis reiciendis ea provident?{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={launch} alt="rocket" />
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ backgroundColor: "#8E45CE", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Officiis temporibus blanditiis totam, commodi quasi explicabo
              aliquam illo, eligendi corporis reiciendis ea provident?{" "}
            </Typography>

            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Officiis temporibus blanditiis totam, commodi quasi explicabo
              aliquam illo, eligendi corporis reiciendis ea provident?{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={maintain} alt="wrench tightening bolts" />
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ backgroundColor: "#29ABE2", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Officiis temporibus blanditiis totam, commodi quasi explicabo
              aliquam illo, eligendi corporis reiciendis ea provident?{" "}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Officiis temporibus blanditiis totam, commodi quasi explicabo
              aliquam illo, eligendi corporis reiciendis ea provident?{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={iterate} alt="falling dominoes" />
        </Grid>
      </Grid>
    </Grid>
  );
}
