import React from "react";
import Paper from "@material-ui/core/Paper";
import { useForm } from "react-hook-form";
import { Button, Typography } from "@material-ui/core";
import classes from "./SignUp.module.scss";

export default function SignUp() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className={classes.root}>
            <Paper variant="outlined" className={classes.paper} >
                <Typography variant="h6">
                    Register
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="firstName" ref={register({ required: true })} placeholder="First Name" />
                    {errors.firstName && <span>This field is required</span>}

                    <input name="lastName" ref={register({ required: true })} placeholder="Last Name" />
                    {errors.lastName && <span>This field is required</span>}

                    <input name="email" ref={register({ required: true })} placeholder="Email" />
                    {errors.email && <span>This field is required</span>}

                    <input name="password" ref={register({ required: true })} placeholder="Password" />
                    {errors.password && <span>This field is required</span>}

                    <Button type="submit" className={classes.submit} >Submit</Button>
                </form>
            </Paper>
        </div>
    );
}
