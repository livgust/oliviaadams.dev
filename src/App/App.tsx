import React from "react";
//import logo from "./logo.svg";
//import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MenuBar from "../MenuBar";
import Landing from "../Landing";
import "./App.css";
import "typeface-roboto";

export default function App() {
    /* const classes = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1
            },
            title: {
                flexGrow: 1
            }
        })
    )(); */
    return (
        <>
            <MenuBar />
            <Landing />
        </>
    );
}
