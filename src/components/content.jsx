import React, { useEffect, useState } from "react";
import { FormControl, InputAdornment, makeStyles, MenuItem, TextField, Grid, Button, Box, Fab, useTheme, useMediaQuery } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import CustomLoader from "./loader";
import CountryListItemComponent from "./country_list_item";
import { useDispatch, useSelector } from "react-redux";
import { countryAPI, filterByRegion, search } from "../countryReducer";
import { concat, slice } from "lodash";
import ScrollToTop from "react-scroll-up";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3, 2),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6, 0),
        },
    },
    listContainer: {
        justifyContent: 'center',
        '& .MuiGrid-item': {
            maxWidth: 265,
        },
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'space-around'
        },
        [theme.breakpoints.up('md')]: {
            justifyContent: 'space-between'
        },
    },
    search: {
        '& input': {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
        },
        '& .MuiInputAdornment-positionStart': {
            margin: theme.spacing(0, 3),
        },
        marginBottom: theme.spacing(4),
    },
    select: {
        '& .MuiInputLabel-root': {
            paddingLeft: theme.spacing(2),
        },
        '& .MuiSelect-root': {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
        },
    },
    selectItem: {
        paddingLeft: theme.spacing(3),
    },
    loadMoreContainer: {
        width: 280,
        marginTop: theme.spacing(5),
        marginRight: 'auto',
        marginLeft: 'auto',
        textAlign: 'center'
    }
}));
export default function ContentComponent(props) {
    const LIMIT = 8;
    const classes = useStyles();
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.data);
    const [countryList, setCountryList] = useState([]);
    const [index, setIndex] = useState(LIMIT);
    const isLoading = useSelector((state) => state.isLoading);
    const [selectedRegion, setSelectedRegion] = useState('all');
    const regions = [
        { name: 'Africa', filter: 'africa' },
        { name: 'America', filter: 'americas' },
        { name: 'Asia', filter: 'asia' },
        { name: 'Europe', filter: 'europe' },
        { name: 'Oceania', filter: 'oceania' },
    ];

    const theme = useTheme();
    const mdView = useMediaQuery(theme.breakpoints.up('md'));
    const smView = useMediaQuery(theme.breakpoints.up('sm'));

    useEffect(() => {
        dispatch(countryAPI());
    }, []);

    useEffect(() => {
        if (countries.length > 0)
            setCountryList(slice(countries, 0, index));
        else
            setCountryList([]);
    }, [countries])

    const handleSelectRegionChange = (e) => {
        setSelectedRegion(e.target.value);
        dispatch(filterByRegion(e.target.value));
        setIndex(LIMIT);
    }

    const handleSearchOnChange = e => {
        dispatch(search(e.target.value));
    }

    const handleLoadMoreClick = () => {
        const newIndex = index + LIMIT;
        const newList = concat(countryList, slice(countries, index, newIndex));
        setIndex(newIndex);
        setCountryList(newList);
    }

    return (
        <div className={classes.root}>
            <Grid container
                justifyContent='space-between'>
                <Grid item xs={12} md={4}>
                    <FormControl fullWidth
                        className={classes.search}>
                        <TextField variant='outlined'
                            id='search-country'
                            placeholder='Search for a country...'
                            autoComplete='off'
                            onChange={handleSearchOnChange}
                            size='small'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <Search />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={7} md={2}>
                    <TextField
                        variant='outlined'
                        fullWidth
                        select
                        className={classes.select}
                        label='Filter by Region'
                        value={selectedRegion}
                        onChange={handleSelectRegionChange}>
                        <MenuItem className={classes.selectItem} value='all'>All</MenuItem>
                        {regions.map((item, index) => (
                            <MenuItem className={classes.selectItem} key={index} value={item.filter}>{item.name}</MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
            <Grid container
                className={classes.listContainer}>
                {countryList.map((item, index) => (
                    <Grid key={index}
                        item xs={12} sm={6} md={4} lg={3}>
                        <CountryListItemComponent
                            data={item} />
                    </Grid>
                ))}
            </Grid>
            {index < (countries.length - 1) && (
                <Box className={classes.loadMoreContainer}
                    onClick={handleLoadMoreClick}>
                    <Button variant='contained'
                        color='primary'
                        size='small'>Load More</Button>
                </Box>
            )}
            <ScrollToTop showUnder={160}>
                <Fab color='primary'>
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollToTop>
            <CustomLoader
                show={isLoading}
            />
        </div>
    );
}