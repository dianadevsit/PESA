import React from 'react';
import { TextField, Button, Card, Typography, CardActions, CardContent, makeStyles } from '@material-ui/core';


const faker = require('faker');

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        backgroundColor: '#FFE9B1'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export const JobCard = ({job}) => {
    console.log('JOB IS HERE::', job);
    const {title, description, companyName, location} = job;
    const classes = useStyles();
    return(
        <Card className={classes.card}>
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Job Title: {title}
</Typography>
            <Typography variant="h5" component="h2">
               Company: {companyName}
</Typography>
            <Typography className={classes.pos} color="textSecondary">
                Description: {description}
</Typography>
            <Typography variant="body2" component="p">
                Location: {location}   
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
        )
};