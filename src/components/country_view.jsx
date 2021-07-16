import { Box, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 375,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 16
    },
    media: {
        aspectRatio: '4/3',
        margin: theme.spacing(8, 0),
    },
    title: {
        fontWeight: theme.typography.fontWeightBold,
        paddingBottom: theme.spacing(2),
    },
    details: {
        lineHeight: 2.25,
        fontWeight: theme.typography.fontWeightMedium, 
        '& span': {
            fontWeight: theme.typography.fontWeightLight, 
        },
    },
    subDetail: {
        margin: theme.spacing(5, 0)
    },
    borderCountries: {
        fontWeight: theme.typography.fontWeightMedium, 
    },
}));

export default function CountryDetailViewComponent(props) {
    const classes = useStyles();
    console.log('country view', props);



    return (<div className={classes.root}>
        <CardMedia
            className={classes.media}
            image={props.data.flag} />
        <Typography className={classes.title} variant='h5'>{props.data.name}</Typography>
        <Box className={classes.details}>Native Name:<Box component='span'> {props.data.nativeName}</Box></Box>
        <Box className={classes.details}>Population:<Box component='span'> {new Intl.NumberFormat('en-IN').format(props.data.population)}</Box></Box>
        <Box className={classes.details}>Region:<Box component='span'> {props.data.region}</Box></Box>
        <Box className={classes.details}>Sub Region:<Box component='span'> {props.data.subregion}</Box></Box>
        <Box className={classes.details}>Capital:<Box component='span'> {props.data.capital}</Box></Box>
        <Box className={classes.subDetail}>
            <Box className={classes.details}>Top Level:<Box component='span'> {props.data.topLevelDomain.join(', ')}</Box></Box>
            <Box className={classes.details}>Currencies:<Box component='span'> {props.data.currencies.map(({name}) => name).join(', ')}</Box></Box>
            <Box className={classes.details}>Languages:<Box component='span'> {props.data.languages.map(({ name }) => name).join(', ')}</Box></Box>
        </Box>
        <Typography className={classes.borderCountries} variant='h6'>Border Countries:</Typography>

    </div>)
}