import { AppBar, Box, Button, makeStyles, Toolbar } from "@material-ui/core";
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { changeTheme } from "../countryReducer";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        minHeight: theme.spacing(11),
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: theme.spacing(0, 2),
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(0, 10),
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: 1440
        },
    },
    title: {
        flexGrow: 1,
        [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.h5.fontSize,
        },
    },
    button: {
        textTransform: 'none',
    }
}));

export default function HeaderComponent(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleChangeThemeClick = () => {
        dispatch(changeTheme());
    }

    return (
        <AppBar position='relative'>
            <Toolbar className={classes.toolbar}>
                <Box className={classes.title}
                    fontWeight='fontWeightBold'>Where in the world?</Box>
                <Button className={classes.button}
                    onClick={handleChangeThemeClick}
                    startIcon={<Brightness7Icon />}>Dark Mode</Button>
            </Toolbar>
        </AppBar>
    )
}
