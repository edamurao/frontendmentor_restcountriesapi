import React, { useEffect, useState } from "react";
import { Box, Button, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getCountryInfo } from "../countryReducer";

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
        backgroundSize: 'contain',
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
    borderCountryBtn: {
        height: '100%'
    }
}));

export default function CountryDetailViewComponent(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const countryInfo = useSelector((state) => state.countryInfo);
    const bordersInfo = useSelector((state) => state.bordersInfo);
    const [info, setInfo] = useState(countryInfo);

    useEffect(() => {
        if (props.data !== null) {
            dispatch(getCountryInfo(props.alpha3Code));
        }
    }, []);

    useEffect(() => {
        if(countryInfo !== null)
            setInfo(countryInfo);
    }, [countryInfo]);

    const handleBorderCountryInfoClick = data => {        
        dispatch(getCountryInfo(data.alpha3Code));
    }

    return (<div className={classes.root}>
        {info !== null && (
            <React.Fragment>
                <CardMedia
                    className={classes.media}
                    image={info.flag} />
                <Typography className={classes.title} variant='h5'>{info.name}</Typography>
                <Box className={classes.details}>Native Name:<Box component='span'> {info.nativeName}</Box></Box>
                <Box className={classes.details}>Population:<Box component='span'> {new Intl.NumberFormat('en-IN').format(info.population)}</Box></Box>
                <Box className={classes.details}>Region:<Box component='span'> {info.region}</Box></Box>
                <Box className={classes.details}>Sub Region:<Box component='span'> {info.subregion}</Box></Box>
                <Box className={classes.details}>Capital:<Box component='span'> {info.capital}</Box></Box>
                <Box className={classes.subDetail}>
                    <Box className={classes.details}>Top Level:<Box component='span'> {info.topLevelDomain.join(', ')}</Box></Box>
                    <Box className={classes.details}>Currencies:<Box component='span'> {info.currencies.map(({ name }) => name).join(', ')}</Box></Box>
                    <Box className={classes.details}>Languages:<Box component='span'> {info.languages.map(({ name }) => name).join(', ')}</Box></Box>
                </Box>
            </React.Fragment>
        )}
        {bordersInfo !== null && (
            <Typography className={classes.borderCountries} variant='h6'>Border Countries:</Typography>
        )}
        <Grid container spacing={1}>
            {bordersInfo !== null && bordersInfo.map((item, index) => (
                <Grid key={index} item xs={4}>
                    <Button
                        className={classes.borderCountryBtn}
                        onClick={() => handleBorderCountryInfoClick(item)}
                        fullWidth
                        variant='contained'
                        color='primary'>{item.name}</Button>
                </Grid>
            ))}
        </Grid>

    </div>)
}