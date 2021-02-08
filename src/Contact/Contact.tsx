import React from "react";
import Avatar from "@material-ui/core/Avatar";
import GithubIcon from "./github-icon.png";
import LinkedInIcon from "./linkedin-icon.png";
import MediumIcon from "./medium-icon.webp";
import TwitterIcon from "./twitter-icon.webp";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

function AvatarLink(props: { link: string; icon: string }) {
    return (
        <Grid item>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <Avatar variant="square" src={props.icon} />
            </a>
        </Grid>
    );
}

export default function Contact() {
    const classes = makeStyles((theme: Theme) =>
        createStyles({
            iconList: {
                padding: "20px",
                marginLeft: "-40px",
                marginRight: "-40px",
            },
            icon: {
                backgroundColor: theme.palette.secondary.main,
            },
        })
    )();
    return (
        <Grid
            container
            spacing={5}
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.iconList}
        >
            <AvatarLink
                link="https://linkedin.com/in/oliviaraeadams"
                icon={LinkedInIcon}
            />
            <AvatarLink link="https://github.com/livgust" icon={GithubIcon} />
            <AvatarLink link="https://medium.com/@liv.gust" icon={MediumIcon} />
            <AvatarLink link="https://twitter.com/livgust" icon={TwitterIcon} />
        </Grid>
    );
}
