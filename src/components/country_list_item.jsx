import React, { useState } from "react";
import { Dialog, Box, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography, Button, DialogContent } from "@material-ui/core";
import HeaderComponent from "./header";
import CountryDetailViewComponent from "./country_view";
import { KeyboardBackspaceSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        // width: 280,
        marginTop: theme.spacing(5),
        marginRight: 'auto',
        marginLeft: 'auto',
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(3),
        },
        [theme.breakpoints.up('lg')]: {
            marginBottom: theme.spacing(5),
        }
    },
    media: {
        aspectRatio: '16/9',
    },
    content: {
        padding: theme.spacing(3, 3, 6, 3),
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
            fontWeight: theme.typography.fontWeightLight,
        },
    },
    dialogViewContent: {
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(10),
            paddingRight: theme.spacing(10),
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
        [theme.breakpoints.up('sm')]: {
            maxWidth: 'initial',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: 1440,
            marginTop: theme.spacing(5),
            paddingLeft: theme.spacing(0),
            paddingRight: theme.spacing(0),
        }
    },
}))

export default function CountryListItemComponent(props) {
    const classes = useStyles();
    const [openViewDetail, setOpenViewDetail] = useState(false);

    const handleViewCountryDetailClick = () => {
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
                    <Typography className={classes.details} variant='body2'>Population: <Box component='span'>{new Intl.NumberFormat().format(props.data.population)}</Box></Typography>
                    <Typography className={classes.details} variant='body2'>Region: <Box component='span'>{props.data.region}</Box></Typography>
                    <Typography className={classes.details} variant='body2'>Capital: <Box component='span'>{props.data.capital}</Box></Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Dialog fullScreen open={openViewDetail}>
            <HeaderComponent />
            <DialogContent className={classes.dialogViewContent}>
                <div className={classes.viewBackBtnContainer}>
                    <Button
                        variant='contained'
                        color='primary'
                        startIcon={<KeyboardBackspaceSharp />}
                        onClick={() => setOpenViewDetail(false)}>Back</Button>
                </div>
                <CountryDetailViewComponent
                    alpha3Code={props.data.alpha3Code}
                />
            </DialogContent>
        </Dialog>
    </React.Fragment>)
}