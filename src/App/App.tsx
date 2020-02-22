import React from "react";
//import logo from "./logo.svg";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import "typeface-roboto";

export default function App() {
    const classes = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1
            },
            title: {
                flexGrow: 1
            }
        })
    )();
    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Olivia Adams
                    </Typography>
                    <MenuButtons />
                </Toolbar>
            </AppBar>
        </div>
    );
}

function MenuButtons() {
    return (
        <ButtonGroup aria-label="navigation" color="inherit" variant="text">
            <Button>Experience</Button>
            <Button>Posts</Button>
            <Button>Contact</Button>
        </ButtonGroup>
    );
}
