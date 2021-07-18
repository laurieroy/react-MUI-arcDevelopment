import React from "react";
import Lottie from "react-lottie";

import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Button, Grid, Typography } from "@material-ui/core";

import ButtonArrow from "../components/ui/ButtonArrow"
import animationData from "../animations/landinganimation/data";

const useStyles = makeStyles(theme = ({
	animation: {
		maxwidth: "50em",
		minWidth: "21em",
		marginTop: "2em",
		marginLeft: "10%",
		[theme.breakpoints.down("sm")]: {
			maxWidth: "30em"
		}
	},
	buttonContainer: {
		marginTop: "1em"
	},
	estimateButton: {
		...theme.Typography.estimate,
		backgroundColor: theme.palette.common.orange,
		borderRadius: 50,
		height: 45,
		width: 145,
		marginRight: 40,
		"&:hover": {
			backgroundColor: theme.palette.secondary.light
		}
	},
	heroTextContainer: {
		minWidth: "21.5em",
		marginLeft: "1em",
		[theme.breakpoints.down("xs")]: {
			marginLeft: 0
		}
	},
	learnButtonHero: {
		border: theme.palette.common.blue,
		color: theme.palette.common.blue,
		boderWidth: 2,
		textTransform: "none",
		borderRadius: 50,
		fontFamily: "Roboto",
		fontWeight: "bold",
		fontSize: "0.9rem",
		height: 45,
		width: 145
	},
	mainContainer: {
		marginTop: "5em",
		[theme.breakpoints.down("md")]: {
			marginTop: "3em"
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "2em"
		}
	},


}))

export default function LandingPage() {
	const classes = useStyles();
	const theme = useTheme();

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	}
	return (
		<Grid container direction="column" className={classes.mainContainer}>
		<Grid item>
		<Grid container justify="flex-end" align-items="center">
		<Grid item sm className={classes.heroTextContainer}>
		<Typography align="center" variant="h2">Bringing West Coast Technology<br />to the Midwest</Typography>
		<Grid className={classes.buttonContainer} container justify="center">
		<Grid item>
		<Button className={classes.estimateButton} variant="contained">Free Estimate</Button>
		</Grid>
		<Grid item>
		<Button className={classes.learnButtonHero} variant="outlined"><span style={{marginRight: 10 }} >Learn More</span>
		<ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
		</Button>
		</Grid>
		</Grid>
		</Grid>
		<Grid item sm className={classes.animation}>
		<Lottie options={defaultOptions} height={"100%"} width={"100%"} />);

		</Grid>
		</Grid>
		</Grid>
		
		</Grid>
		)
}