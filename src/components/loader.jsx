import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: theme.zIndex.appBar + 1,
    }
}))

export default function CustomLoader(props){
    const classes = useStyles();
    return(<Backdrop 
        open={props.show}
        className={classes.root}>
            <CircularProgress />
        </Backdrop>)
}