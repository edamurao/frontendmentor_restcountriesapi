import { createTheme } from "@material-ui/core";

const darkTheme = createTheme({
    typography: {
        fontSize: 14,
        fontFamily: [
            'Nunito Sans', 'sans-serif'
        ].join(','),
        fontWeightMedium: 600,
        fontWeightBold: 800,
        h6: {
            fontSize: '1.25rem',
            fontWeight: 600
        }
    },
    palette: {
        background: {
            default: 'hsl(207, 26%, 17%)'
        },
        text: {
            primary: 'hsl(0, 0%, 100%)',
        },
        primary: {
            main: 'hsl(209, 23%, 22%)',
            
        },
    },    
    overrides: {
        MuiToolbar: {
            root: {
                backgroundColor: 'hsl(209, 23%, 22%)',
            }
        },
        MuiPaper: {
            root: {
                backgroundColor: 'hsl(209, 23%, 22%)',
            }
        },
        MuiInputBase: {
            root: {
                fontSize: 14,
                '& input': {
                    '&::placeholder': {
                        opacity: 1,
                    }
                }
            },
        },
        MuiFormLabel: {
            root: {
                color: 'hsl(0, 0%, 100%)',
                fontSize: 14
            },            
        },
        MuiSelect: {
            icon: {
                color: 'hsl(0, 0%, 100%)',
            },
        },
        MuiFormControl: {
            root: {
                backgroundColor: 'hsl(209, 23%, 22%)',
                borderRadius: 8
            },
        },
        MuiCard: {
            root: {
                borderRadius: 8
            }
        }
    }
});
console.log('dark theme', darkTheme);
export default darkTheme;