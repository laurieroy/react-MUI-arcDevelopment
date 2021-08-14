import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import {
  Avatar,
  Button,
  Dialog,
  // DialogActions,
  DialogContent,
  // DialogContentText,
  // DialogTitle,
  Grid,
  // Hidden,
  TextField,
  Typography,
} from "@material-ui/core";

import airplane from "../assets/send.svg";
import background from "../assets/background.jpg";
import emailIcon from "../assets/email.svg";
import mobileBackground from "../assets/mobileBackground.jpg";
import phoneIcon from "../assets/phone.svg";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import ButtonArrow from "./ui/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    fontSize: "1.5rem",
    height: 80,
    width: 205,
    marginLeft: "2em",
    marginRight: "5em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontHeight: 35,
    fontSize: "0.7rem",
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    borderRadius: 5,
    marginTop: "5em",
  },
  sendButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    fontSize: "1rem",
    height: 45,
    width: 245,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);

        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }

        break;

      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper("Invalid phone");
        } else {
          setPhoneHelper("");
        }

        break;
      default:
        break;
    }
  };

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h2"
                align={matchesMD ? "center" : undefined}
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting
              </Typography>
            </Grid>

            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="tel:5555555555"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    (555) 555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="envelope"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="mailto:zachary@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    zachary@gmail.com"
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "20em" }}
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  error
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  error={emailHelper.length !== 0}
                  fullWidth
                  helperText={emailHelper}
                  id="email"
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Phone"
                  error={phoneHelper.length !== 0}
                  fullWidth
                  helperText={phoneHelper}
                  id="phone"
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                value={message}
                className={classes.message}
                fullWidth
                id="message"
                multiline
                onChange={(event) => setMessage(event.target.value)}
                rows={10}
              ></TextField>
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "2em" }}>
              <Button
                // disabled={
                //   name.length === 0 ||
                //   email.length === 0 ||
                //   message.length === 0 ||
                //   phone.length === 0 ||
                //   phoneHelper.length !== 0 ||
                //   emailHelper.length !== 0
                // }
                variant="contained"
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                Send Message
                <img
                  src={airplane}
                  alt="paper airplane"
                  style={{ marginLeft: "1em" }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        fullScreen={matchesXS}
        open={open}
        onClose={() => setOpen(false)}
        style={{ zIndex: 1302 }}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "5em",
            paddingBottom: matchesXS ? "1em" : "5em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "20em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "20em",
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Name"
                id="name"
                error
                fullWidth
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Email"
                error={emailHelper.length !== 0}
                fullWidth
                helperText={emailHelper}
                id="email"
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Phone"
                error={phoneHelper.length !== 0}
                fullWidth
                helperText={phoneHelper}
                id="phone"
                value={phone}
                onChange={onChange}
              />
            </Grid>

            <Grid item style={{ maxWidth: matchesXS ? "100%" : "20em" }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                value={message}
                className={classes.message}
                fullWidth
                id="message"
                multiline
                onChange={(event) => setMessage(event.target.value)}
                rows={10}
              ></TextField>
            </Grid>
            <Grid
              item
              container
              style={{ marginTop: "2em" }}
              alignItems="center"
              direction={matchesSM ? "column" : "row"}
            >
              <Grid item>
                <Button
                  color="primary"
                  onClick={() => setOpen(false)}
                  style={{ fontWeight: 300 }}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  disabled={
                    name.length === 0 ||
                    email.length === 0 ||
                    message.length === 0 ||
                    phone.length === 0 ||
                    phoneHelper.length !== 0 ||
                    emailHelper.length !== 0
                  }
                  variant="contained"
                  className={classes.sendButton}
                  onClick={() => setOpen(true)}
                >
                  Send Message
                  <img
                    src={airplane}
                    alt="paper airplane"
                    style={{ marginLeft: "1em" }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Grid
        item
        container
        alignItems="center"
        className={classes.background}
        direction={matchesMD ? "column" : "row"}
        justify={matchesMD ? "center" : undefined}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                Simple Software.
                <br />
                Revolutionary Results
              </Typography>
              <Typography
                variant="subtitle2"
                align={matchesMD ? "center" : undefined}
                style={{ fontSize: "1.5rem" }}
              >
                Take advantage of the 21st Century.
              </Typography>
              <Grid container item justify={matchesMD ? "center" : undefined}>
                <Button
                  className={classes.learnButton}
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            component={Link}
            to="/estimate"
            onClick={() => props.setValue(5)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
