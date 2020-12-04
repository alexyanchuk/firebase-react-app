import React from "react";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import classes from "./Paper.module.scss";

export default function PaperWrap({children}) {
    return (
        <Paper variant="outlined" className={clsx(classes.root, classes.paper)}>
            {children}
        </Paper>
    );
}
