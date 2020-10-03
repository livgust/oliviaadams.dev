import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link, LinkProps } from "react-router-dom";

export default function UnstyledLink(props: LinkProps) {
    const classes = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                color: "currentColor",
                textDecoration: "initial",
            },
        })
    )();
    return <Link {...props} className={`${classes.root} ${props.className}`} />;
}
