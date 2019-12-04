import React from 'react';
import { TextField, Button } from '@material-ui/core';

export const SearchFilter = (props) => {
    console.log('props in search filter compo:', props);

    return (
        <>
            <form noValidate autoComplete="off">
                <TextField 
                    id="outlined-basic" 
                    label="Title" 
                    variant="outlined" 
                    name="title"
                    value={props.title} 
                    onChange={props.updateSearchFilter}
                />
                <TextField 
                    id="outlined-basic" 
                    label="Location" 
                    variant="outlined" 
                    name="location"
                    value={props.location}
                    onChange={props.updateSearchFilter} 
                />
            </form>
        </>
    
    )
};