import React, { useEffect, useState } from "react";
import { Box, Button, CardMedia, Grid, makeStyles, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getCountryInfo } from "../countryReducer";

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: theme.typography.pxToRem(16),
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: 1440,
            padding: 0,
        }
    },
    title: {
        fontWeight: theme.typography.fontWeightBold,
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.pxToRem(32),
            paddingBottom: theme.spacing(2),
        },
    },
    details: {
        lineHeight: 2.25,
        fontWeight: theme.typography.fontWeightMedium,
        '& span': {
            fontWeight: theme.typography.fontWeightLight,
        },
    },
    borderCountryContainer: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            marginTop: theme.spacing(6)
        },
    },
    borderCountriesTitle: {
        fontWeight: theme.typography.fontWeightMedium,
        marginBottom: theme.spacing(2),
        lineHeight: 2,
        minWidth: 126.95,
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(5),
        },
        [theme.breakpoints.up('md')]: {
            margin: 0
        }
    },
    borderCountryBtn: {
        height: '100%',
    },
    countryInfo: {
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(10)
        },
    },
    media: {
        aspectRatio: '4/3',
        margin: theme.spacing(8, 0),
        backgroundSize: 'cover',
        [theme.breakpoints.up('md')]: {
            margin: 0,
            marginRight: theme.spacing(5),
        },
        [theme.breakpoints.up('lg')]: {
            marginRight: theme.spacing(10),
        }
    },
    info: {
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(5),
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: theme.spacing(10),
        },
    },    
    subDetail1: {
        [theme.breakpoints.up('md')]: {

        },
    },
    subDetail2: {
        margin: theme.spacing(5, 0),
        [theme.breakpoints.up('sm')]: {
            margin: 0
        },
    },

}));

export default function CountryDetailViewComponent(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const countryInfo = useSelector((state) => state.countryInfo);
    const bordersInfo = useSelector((state) => state.bordersInfo);
    const [info, setInfo] = useState(countryInfo);
    const theme = useTheme();
    const mdView = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(() => {
        if (props.data !== null) {
            dispatch(getCountryInfo(props.alpha3Code));
        }
    }, []);

    useEffect(() => {
        if (countryInfo !== null)
            setInfo(countryInfo);
    }, [countryInfo]);

    const handleBorderCountryInfoClick = data => {
        dispatch(getCountryInfo(data.alpha3Code));
    }

    const BorderInfoComponent = () => {
        return (<Box className={classes.borderCountryContainer}>
            <Box mr={2}>
                <Typography className={classes.borderCountriesTitle} variant={mdView ? 'body1' : 'h6'}>Border Countries:</Typography>
            </Box>
            <Box>
                <Grid container spacing={1}>
                    {bordersInfo.map((item, index) => (
                        <Grid key={index} item xs={4} md={6} lg={4}>
                            <Button
                                className={classes.borderCountryBtn}
                                onClick={() => handleBorderCountryInfoClick(item)}
                                fullWidth
                                variant='contained'
                                color='primary'>{item.name}</Button>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>)
    }

    const MEDIA_GRID_SIZE = 6;

    return (<div className={classes.root}>
        {info !== null && (
            <Grid container
                className={classes.countryInfo}
                alignItems='flex-start'>
                <Grid xs={12} md={6}>
                    <CardMedia
                        className={classes.media}
                        image={info.flag} />
                </Grid>
                <Grid xs={12} md={6}>
                    <Grid container
                        alignItems='center'
                        className={classes.info}>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12}><Typography className={classes.title} variant='h5'>{info.name}</Typography></Grid>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={12} sm md>
                                            <Box className={classes.subDetail1}>
                                                <Box className={classes.details}>Native Name:<Box component='span'> {info.nativeName}</Box></Box>
                                                <Box className={classes.details}>Population:<Box component='span'> {new Intl.NumberFormat('en-IN').format(info.population)}</Box></Box>
                                                <Box className={classes.details}>Region:<Box component='span'> {info.region}</Box></Box>
                                                <Box className={classes.details}>Sub Region:<Box component='span'> {info.subregion}</Box></Box>
                                                <Box className={classes.details}>Capital:<Box component='span'> {info.capital}</Box></Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm md>
                                            <Box className={classes.subDetail2}>
                                                <Box className={classes.details}>Top Level:<Box component='span'> {info.topLevelDomain.join(', ')}</Box></Box>
                                                <Box className={classes.details}>Currencies:<Box component='span'> {info.currencies.map(({ name }) => name).join(', ')}</Box></Box>
                                                <Box className={classes.details}>Languages:<Box component='span'> {info.languages.map(({ name }) => name).join(', ')}</Box></Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    {bordersInfo !== null && (<BorderInfoComponent />)}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )}

    </div>)
}