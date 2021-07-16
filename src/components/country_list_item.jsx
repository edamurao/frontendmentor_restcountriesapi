import React, { useState } from "react";
import { Dialog, Box, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography, Button, DialogContent } from "@material-ui/core";
import HeaderComponent from "./header";
import CountryDetailViewComponent from "./country_view";
import { KeyboardBackspaceSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 280,
        marginTop: theme.spacing(5),
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    media: {
        aspectRatio: '16/9',
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
        fontWeight: theme.typography.fontWeightMedium,
        '& span': {
            // color: 'hsl(0, 0%, 74%)',
            fontWeight: theme.typography.fontWeightLight,
        },
    },
    viewBackBtnContainer: {
        maxWidth: 375,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: theme.spacing(4),
        '& button': {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            fontSize: 16,
            fontWeight: theme.typography.fontWeightLight
        },
    },
}))

export default function CountryListItemComponent(props) {
    const classes = useStyles();
    const [openViewDetail, setOpenViewDetail] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleViewCountryDetailClick = () => {
        setSelectedCountry(props.data);
        setOpenViewDetail(true);
    }

    return (<React.Fragment>
        <Card className={classes.root}>
            <CardActionArea onClick={handleViewCountryDetailClick}>
                <CardMedia
                    className={classes.media}
                    image={props.data.flag}
                />
                <CardContent className={classes.content}>
                    <Box className={classes.title}><Typography variant='h6'>{props.data.name}</Typography></Box>
                    <Box className={classes.details}>Population: <Box component='span'>{new Intl.NumberFormat('en-IN').format(props.data.population)}</Box></Box>
                    <Box className={classes.details}>Region: <Box component='span'>{props.data.region}</Box></Box>
                    <Box className={classes.details}>Capital: <Box component='span'>{props.data.capital}</Box></Box>
                </CardContent>
            </CardActionArea>
        </Card>
        <Dialog fullScreen open={openViewDetail}>
            <HeaderComponent />
            <DialogContent>
                <div className={classes.viewBackBtnContainer}>
                    <Button
                        variant='contained'
                        color='primary'
                        startIcon={<KeyboardBackspaceSharp />}
                        onClick={() => setOpenViewDetail(false)}>Back</Button>
                </div>
                <CountryDetailViewComponent
                    data={props.data}
                />
            </DialogContent>
        </Dialog>
    </React.Fragment>)
}