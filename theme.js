import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: "#8498B6",
		},
		secondary: {
			main: "#CB8D99",
		},
		error: {
			main: red.A400,
		},
	},
	typography: {
		fontFamily: '"Roboto", "Arial", sans-serif',
		fontSize: 17,
		fontWeightBold: 700,
		h1: {
			fontSize: 25,
			fontWeight: 300,
		},
		subtitle1: {
			fontFamily: "Roboto",
		},
		body1: {
			fontFamily: "Roboto",
		},
		button: {
			fontWeight: 500,
			fontSize: 14,
		},
	},
});

export default theme;
