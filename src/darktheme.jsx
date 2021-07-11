import { createTheme } from "@material-ui/core";

const darkTheme = createTheme({
    typography: {
        fontSize: 14,
        fontFamily: [
            'Nunito Sans', 'sans-serif'
        ].join(','),        
        fontWeightMedium: 600,
        fontWeightBold: 800
    },
    palette: {
        background: {
            default: 'hsl(207, 26%, 17%)'
        },
        text: {
            primary: 'hsl(0, 0%, 100%)',
        }
    },
    overrides: {
        MuiToolbar: {
            root: {
                backgroundColor: 'hsl(209, 23%, 22%)',
            }
        }
    }
});
console.log('dark theme', darkTheme);
export default darkTheme;