import { createTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcGrey = "#868686";
const arcOrange = "#FFBA60";

export default createTheme({
  palette: {
		common: {
			blue: arcBlue,
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
		},
		h2: {
			color: arcBlue,
			fontFamily: "Raleway",
			fontWeight: 700,
			fontSize: "2.5rem",
			lineHeight: 1.5
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
	subtitle1: {
		color: arcGrey,
		fontWeight: 300,
		fontSize: "1.25rem",
	},
	learnButton: {
		border: arcBlue,
		color: arcBlue,
		boderWidth: 2,
		textTransform: "none",
		borderRadius: 50,
		fontFamily: "Roboto",
		fontWeight: "bold",
	},


	}
});