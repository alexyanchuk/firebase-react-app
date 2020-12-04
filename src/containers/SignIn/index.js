import React, { useRef } from "react";
import Paper from "../../components/Paper";
import { useForm } from "react-hook-form";
import { Button, Container, Typography } from "@material-ui/core";
import firebase from "../../services/firebase";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import classes from "./SignIn.module.scss";

export default function SignIn() {
    const { register, handleSubmit, watch, errors } = useForm();

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <Container className={classes.root}>
            <Paper>
                <Typography variant="h6">
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        name="email"
                        type={"email"}
                        ref={register({ required: true })}
                        placeholder="Email"
                        error={errors?.email}
                        helperText={errors?.email && "This field is required"}
                        inputProps={{
                            'aria-label': 'email',
                            "name":"email"
                        }}
                    />

                    <TextField
                        name="password"
                        type={"password"}
                        ref={register({ required: true })}
                        placeholder="Password"
                        error={errors?.password}
                        helperText={errors?.password && "This field is required"}
                        inputProps={{
                            'aria-label': 'password',
                            "name":"password"
                        }}
                    />

                    <Button type="submit" className={classes.submit} >Submit</Button>
                </form>

                <Typography variant="body1">
                    Don’t have an account yet? <Link to={ROUTES.signUp}>Register</Link>
                </Typography>
            </Paper>
        </Container>
    );
}
