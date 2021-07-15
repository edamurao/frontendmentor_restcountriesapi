import React, { useEffect, useState } from "react";
import { FormControl, InputAdornment, makeStyles, MenuItem, TextField, Grid } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import axios from "axios";
import CustomLoader from "./loader";
import CountryListItemComponent from "./country_list_item";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3, 2)
    },
    search: {
        '& input': {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
        },
        '& .MuiInputAdornment-positionStart': {
            margin: theme.spacing(0, 3),
        },

        marginBottom: theme.spacing(4)
    },
    select: {
        '& .MuiInputLabel-root': {
            paddingLeft: theme.spacing(2),
        },
    },
    selectItem: {
        paddingLeft: theme.spacing(3),
    },
}));
export default function ContentComponent(props) {
    const classes = useStyles();
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const regions = [
        { name: 'Africa', filter: 'africa' },
        { name: 'America', filter: 'americas' },
        { name: 'Asia', filter: 'asia' },
        { name: 'Europe', filter: 'europe' },
        { name: 'Oceana', filter: 'oceana' },
    ];

    useEffect(() => {
        const filter = '?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;flag'
        if (selectedRegion === 'all') {
            setLoading(true);            
            axios.get('https://restcountries.eu/rest/v2/all' + filter)
                .then(r => {
                    if (r.status === 200) {
                        setCountries(r.data);
                        setLoading(false);
                    }
                });
        }
        else {
            setLoading(true);
            axios.get('https://restcountries.eu/rest/v2/region/' + selectedRegion + filter)
                .then(r => {
                    if (r.status === 200) {                        
                        setCountries(r.data);
                        setLoading(false);
                    }
                });
        }
    }, [selectedRegion]);

    const handleSelectRegionChange = (e) => {
        setSelectedRegion(e.target.value);
    }

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <FormControl fullWidth
                        className={classes.search}>
                        <TextField variant='outlined'
                            id='search-country'
                            placeholder='Search for a country...'
                            autoComplete='off'
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
                <Grid item xs={7}>
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
                <Grid item xs={12}>
                    {countries.map((item, index) => (
                        <CountryListItemComponent
                            key={index}
                            data={item} />
                    ))}
                </Grid>
            </Grid>
            <CustomLoader 
                show={loading}
            />            
        </div>
    );
}