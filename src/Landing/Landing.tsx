import React from "react";
import headshot from "./headshot_cropped.jpg";
import Grid from "@material-ui/core/Grid";
import "./Landing.css";

export default function Landing() {
    return (
        <Grid container spacing={3}>
            <Grid item sm={8} xs={12}>
                <div>Welcome to my website. My name is Olivia Adams.</div>
            </Grid>
            <Grid item sm={4} xs={12}>
                <img src={headshot} alt="headshot" />
            </Grid>
        </Grid>
    );
}
