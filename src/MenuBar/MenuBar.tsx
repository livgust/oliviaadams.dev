import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";

export default function MenuBar() {
    const classes = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            title: {
                flexGrow: 1,
            },
        })
    )();
    return (
        <div className={classes.root}>
            <AppBar position="sticky">
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

export function MenuButtons() {
    return (
        <ButtonGroup aria-label="navigation" color="inherit" variant="text">
            <Button>Experience</Button>
            <Button>Posts</Button>
            <Button>Contact</Button>
        </ButtonGroup>
    );
}
