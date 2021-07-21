import { AppBar, Box, Button, makeStyles, Toolbar } from "@material-ui/core";
import Brightness7Icon from '@material-ui/icons/Brightness7';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        minHeight: theme.spacing(11),
        maxWidth: 1440,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: theme.spacing(0, 2),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(0, 10),
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
    return (
        <AppBar position='relative'>
            <Toolbar className={classes.toolbar}>
                <Box className={classes.title}
                    fontWeight='fontWeightBold'>Where in the world?</Box>
                <Button className={classes.button}
                    startIcon={<Brightness7Icon />}>Dark Mode</Button>
            </Toolbar>
        </AppBar>
    )
}
