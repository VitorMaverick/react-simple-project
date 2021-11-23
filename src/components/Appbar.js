import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => (
    {
        root: {
            flexGrow: 1,
            marginBottom: 20,
        },
        menuButton : {
            marginRight: theme.spacing(2),

        },
        title: {
            flexGrow: 1,
        },
    }
));


export default function Appbar() {

    const classes = useStyles();
    const linkStyle = {textDecoration: 'none', color: 'white'};

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Estude Application
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Link to="/" style={linkStyle}>Home</Link>
                    </IconButton>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Link to="/list" style={linkStyle}>List Student</Link>
                    </IconButton>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Link to="/add" style={linkStyle}>Register</Link>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}