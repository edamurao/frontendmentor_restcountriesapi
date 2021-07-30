import { createTheme } from "@material-ui/core";

const font = "'Nunito Sans', 'sans-serif'";

const commonSettings = {
    typography: {
        fontSize: 14,
        // fontFamily: [
        //     'Nunito Sans', 'sans-serif'
        // ].join(','),
        fontFamily: font,
        fontWeightMedium: 600,
        fontWeightBold: 800,
        h6: {
            fontWeight: 800,
            fontSize: '1.15rem'
        }
    },
    overrides: {
        MuiInputBase: {
            root: {
                fontSize: 14,
            },
        },
        MuiAppBar: {
            root: {
                boxShadow: '0 8px 24px 0 hsla(0, 0%, 0%, 0.05)',
            }
        },
        MuiPaper: {
            elevation1: {
                boxShadow: '0 8px 24px 0 hsla(0, 0%, 0%, 0.05)',
            }
        },
        MuiOutlinedInput: {
            notchedOutline: {
                border: 0,
                boxShadow: '0 8px 24px 0 hsla(0, 0%, 0%, 0.05)',
            }
        },
        MuiFormLabel: {
            root: {
                fontSize: 14
            },
        },
        MuiFormControl: {
            root: {
                borderRadius: 8
            },
        },
        MuiCard: {
            root: {
                borderRadius: 8
            }
        },
        MuiButton: {
            root: {
                textTransform: 'initial',
            },
            contained: {
                boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;',
            }
        }
    }
};

const darkTheme = createTheme({
    typography: {
        fontFamily: [
            'Nunito Sans', 'sans-serif'
        ].join(','),
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
        type: 'dark',
    },
    overrides: {
        MuiInputBase: {
            input: {
                color: 'hsl(0, 0%, 100%)',
            }
        },
        MuiPaper: {
            root: {
                backgroundColor: 'hsl(209, 23%, 22%)',
            }
        },
        MuiFormLabel: {
            root: {
                color: 'hsl(0, 0%, 100%)',
                '&$focused': {
                    color: 'hsl(0, 0%, 100%)',
                }
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
            },
        },
        MuiDialogContent: {
            root: {
                backgroundColor: 'hsl(207, 26%, 17%)',
            }
        },
    }
}, commonSettings);

const lightTheme = createTheme({
    typography: {
        fontFamily: [
            'Nunito Sans', 'sans-serif'
        ].join(','),
    },
    palette: {
        background: {
            default: 'hsl(0, 0%, 98%)'
        },
        text: {
            primary: 'hsl(0, 0%, 0%)',
        },
        primary: {
            main: 'hsl(0, 0%, 100%)',
        },
        type: 'light',
    },
    overrides: {
        MuiInputBase: {
            input: {
                color: 'hsl(200, 15%, 8%)',
            },
        },
        MuiPaper: {
            root: {
                backgroundColor: 'hsl(0, 0%, 100%)',
            }
        },
        MuiFormLabel: {
            root: {
                color: 'hsl(200, 15%, 8%)',
                '&$focused': {
                    color: 'hsl(200, 15%, 8%)',
                }
            },
        },
        MuiSelect: {
            icon: {
                color: 'hsl(200, 15%, 8%)',
            },
        },
        MuiFormControl: {
            root: {
                backgroundColor: 'hsl(0, 0%, 100%)',
            },
        },
        MuiDialogContent: {
            root: {
                backgroundColor: 'hsl(0, 0%, 98%)',
            }
        },
        MuiInputAdornment: {
            root: {
                color: 'hsl(0, 0%, 52%)',
            },
        }
    }
}, commonSettings);

export { darkTheme, lightTheme };