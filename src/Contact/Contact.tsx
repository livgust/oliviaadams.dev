import React from "react";
import Avatar from "@material-ui/core/Avatar";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "./github-icon.png";
import LinkedInIcon from "./linkedin-icon.png";
import MediumIcon from "./medium-icon.webp";
import TwitterIcon from "./twitter-icon.webp";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

function AvatarLink(props: {
    link: string;
    iconString?: string;
    otherIcon?: JSX.Element;
}) {
    return (
        <Grid item>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                {props.iconString ? (
                    <Avatar variant="square" src={props.iconString} />
                ) : (
                    props.otherIcon
                )}
            </a>
        </Grid>
    );
}

export default function Contact(): JSX.Element {
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
                link="mailto:olivia@oliviaadams.dev"
                otherIcon={
                    <EmailIcon color="primary" style={{ fontSize: 45 }} />
                }
            />
            <AvatarLink
                link="https://linkedin.com/in/oliviaraeadams"
                iconString={LinkedInIcon}
            />
            <AvatarLink
                link="https://github.com/livgust"
                iconString={GithubIcon}
            />
            <AvatarLink
                link="https://medium.com/@liv.gust"
                iconString={MediumIcon}
            />
            <AvatarLink
                link="https://twitter.com/livgust"
                iconString={TwitterIcon}
            />
        </Grid>
    );
}
