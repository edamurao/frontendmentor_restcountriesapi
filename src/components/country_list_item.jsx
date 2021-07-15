import { Box, Card, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 280,
        marginTop: theme.spacing(5),
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    media: {
        height: 175,
    },
    content: {
        padding: theme.spacing(3, 3, 3, 3),
        '&:last-child': {
            paddingBottom: theme.spacing(6)
        }
    },
    title: {
        fontWeight: theme.typography.fontWeightBold,
        paddingBottom: theme.spacing(2),        
    },
    details: {
        lineHeight: 1.75,
        '& span': {
            color: 'hsl(0, 0%, 74%)',
        },        
    }
}))

export default function CountryListItemComponent(props) {
    const classes = useStyles();
    return (<Card className={classes.root}>
        <CardMedia
            className={classes.media}
            image={props.data.flag}
        />
        <CardContent className={classes.content}>
            {/* <Box className={classes.title}>{props.data.name}</Box> */}
            <Box className={classes.title}><Typography variant='h6'>{props.data.name}</Typography></Box>
            <Box className={classes.details}>Population: <Box component='span'>{new Intl.NumberFormat('en-IN').format(props.data.population)}</Box></Box>
            <Box className={classes.details}>Region: <Box component='span'>{props.data.region}</Box></Box>
            <Box className={classes.details}>Capital: <Box component='span'>{props.data.capital}</Box></Box>
        </CardContent>
    </Card>)
}