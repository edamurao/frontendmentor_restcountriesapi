import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const countryAPI = createAsyncThunk(
    'country/get',
    async (_, { rejectWithValue }) => {
        try {
            // const filter = '?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;flag'
            const filter = '';
            const response = await axios.get('https://restcountries.eu/rest/v2/all' + filter);
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const countrySlice = createSlice({
    name: 'country',
    initialState: {
        isLoading: false,
        fetchData: [],
        countryInfo: null,
        bordersInfo: null,
        regionFilter: 'all',
        searchFilter: '',
        data: [],
        error: '',
    },
    reducers: {
        filterByRegion: (state, action) => {
            state.isLoading = true;
            state.regionFilter = action.payload;
            let _filter = [];
            if (action.payload === 'all') {
                _filter = state.fetchData;
            }
            else {
                const newArr = state.fetchData.filter((el) => {
                    return el.region.toUpperCase() === action.payload.toUpperCase();
                });

                _filter = newArr;
            }
            state.data = _filter.filter((el) => el.name.toUpperCase().includes(state.searchFilter.toLocaleUpperCase()));
            state.isLoading = false;
        },
        search: (state, action) => {
            state.searchFilter = action.payload;
            if (state.regionFilter === 'all') {
                state.data = state.fetchData.filter((el) => el.name.toUpperCase().includes(action.payload.toUpperCase()));
            }
            else {
                var t = state.fetchData.filter((el) => el.name.toUpperCase().includes(action.payload.toUpperCase()));
                state.data = t.filter((el) => el.region.toUpperCase() === state.regionFilter.toUpperCase());
            }
        },
        getCountryInfo: (state, action) => {
            const country = state.fetchData.find((el) => el.alpha3Code === action.payload);
            state.countryInfo = country;
            if (country.borders.length > 0) {
                state.bordersInfo = state.fetchData.filter((ele) => country.borders.includes(ele.alpha3Code));
            }
            else
                state.bordersInfo = null;
        },
    },
    extraReducers: {
        [countryAPI.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.fetchData = action.payload;
        },
        [countryAPI.pending]: (state, action) => {
            state.isLoading = true;
        },
        [countryAPI.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export const { filterByRegion, search, getCountryInfo } = countrySlice.actions;

export default countrySlice.reducer;