import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcGrey = "#868686";
const arcOrange = "#FFBA60";

export default createMuiTheme({
  body1: {
    color: arcGrey,
    fontSize: "1.25rem",
    fontWeight: 300,
  },
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    caption: {
      color: arcGrey,
      fontSize: "1rem",
      fontWeight: 300,
    },
    estimate: {
      color: "white",
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
    },
    h2: {
      color: arcBlue,
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.5,
    },
    h3: {
      color: arcBlue,
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
    },
    h4: {
      color: arcBlue,
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    learnButton: {
      border: arcBlue,
      borderRadius: 50,
      boderWidth: 2,
      color: arcBlue,
      fontFamily: "Roboto",
      fontWeight: "bold",
      textTransform: "none",
    },
    subtitle1: {
      color: arcGrey,
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    subtitle2: {
      color: "white",
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    tab: {
      fontFamily: "Raleway",
      fontSize: "1rem",
      fontWeight: 700,
      textTransform: "none",
    },

  },
});
