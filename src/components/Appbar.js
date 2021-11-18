import * as React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";



export default function Appbar() {
    return (

        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <Typography variant="h6" component="div">
                        Photos
                    </Typography>
                </IconButton>

            </Toolbar>
        </AppBar>

    );
}
