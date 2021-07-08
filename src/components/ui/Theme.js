import { createTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export default createTheme({
  palette: {
		common: {
			blue: `${arcBlue}`,
			orange: `${arcOrange}`
		},
    primary: {
      main: `${arcBlue}`
    },
    secondary: {
			main: `${arcOrange}`
		}
	},
	typography: {
		estimate: {
			color: "white",
			fontFamily: "Pacifico",
			fontSize: "1rem",
			textTransform: "none"
		},
		tab: {
			fontFamily: "Raleway",
			fontSize: "1rem",
			fontWeight: 700,
			textTransform: "none"
		}
	}
});