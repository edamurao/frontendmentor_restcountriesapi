import { AppBar, Box, Button, makeStyles, Toolbar } from "@material-ui/core";
import Brightness7Icon from '@material-ui/icons/Brightness7';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        minHeight: theme.spacing(11)
    },
    title: {
        flexGrow: 1,
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
