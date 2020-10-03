import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuBar from "../MenuBar";
import Landing from "../Landing";
import Experience from "../Experience";
import Contact from "../Contact";
import "typeface-roboto";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export default function App() {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#ac3b61",
            },
            secondary: {
                main: "#123c69",
            },
            background: {
                default: "#eee2dc",
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <MenuBar />
                <Switch>
                    <Route exact path="/">
                        <Landing />
                    </Route>
                    <Route path="/experience">
                        <Experience />
                    </Route>
                    {/* <Route path="/posts">
                        <div>posts WIP</div>
                    </Route> */}
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}
