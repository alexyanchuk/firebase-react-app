import React from "react";
import Paper from "@material-ui/core/Paper";
import { useForm } from "react-hook-form";
import { Typography } from "@material-ui/core";
import classes from "./SignIn.module.scss";

export default function SignIn() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className={classes.root}>
            <Paper variant="outlined" className={classes.paper} >
                <Typography variant="h6">
                    Login
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="email" ref={register({ required: true })} />
                    {errors.email && <span>This field is required</span>}

                    <input name="password" ref={register({ required: true })} />
                    {errors.password && <span>This field is required</span>}

                    <input type="submit" />
                </form>
            </Paper>
        </div>
    );
}
