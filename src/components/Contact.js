import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import {
  Avatar,
  Button,
  Grid,
  Hidden,
  TextField,
  Typography,
} from "@material-ui/core";

import background from "../assets/background.jpg";

import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
  },
}));

export default function Contaqct() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container direction="row">
      <Grid item container direction="column" lg={3}>
        <Grid item>
          <Typography variant="h2" style={{ lineHeight: 1 }}>
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            style={{ color: theme.palette.common.blue }}
          >
            We're waiting
          </Typography>
        </Grid>
      </Grid>
      <Grid item container className={classes.background} lg={9}></Grid>
    </Grid>
  );
}
