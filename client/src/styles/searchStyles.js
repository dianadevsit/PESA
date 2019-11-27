import React from 'react';
import { TextField, Button, Card, Typography, CardActions, CardContent, makeStyles } from '@material-ui/core';


const faker = require('faker');

const useStyles = makeStyles({
   background: {
        minWidth: 600,
        backgroundColor: '#EFF0F1'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 3px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});