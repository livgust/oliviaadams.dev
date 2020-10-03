import React from "react";
import headshot from "./headshot_cropped.jpg";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export default function Landing() {
    const classes = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                alignItems: "center",
                "& img": {
                    width: "100%",
                    borderRadius: "50%",
                },
                margin: "-24px",
            },
            bio: {
                padding: "10% !important",
                "& p": {
                    padding: "10px",
                },
            },
        })
    )();
    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item sm={8} xs={12} className={classes.bio}>
                <div>
                    <p>
                        Hi! I'm Olivia. I’m a full-stack software developer and
                        engineering manager with a passion for doing and
                        enabling others to do purposeful work. I’m an outspoken
                        proponent of Agile methodologies whose communication
                        skills and upbeat personality encourage others to rally
                        around great ideas and bring them to fruition.
                    </p>
                    <p>
                        Please check out my resume, blog posts, or engage with
                        me on social media. I look forward to hearing from you!
                    </p>
                </div>
            </Grid>
            <Grid item sm={4} xs={12}>
                <img src={headshot} alt="headshot" />
            </Grid>
        </Grid>
    );
}
