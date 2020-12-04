import React, { useRef } from "react";
import Paper from "../../components/Paper";
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import { Button, Container, Typography } from "@material-ui/core";
import firebase from "../../services/firebase";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import classes from "./SignUp.module.scss";

export default function SignUp() {
    const ref = useRef({});
    const { current } = ref;
    const { register, handleSubmit, watch, errors, formState: { isValid }} = useForm();
    console.log(errors)

    const handleOnSubmit = async event => {
        event?.preventDefault();
        console.log({ ...current.value })
        if (isValid) {
            const db = firebase.database();
            console.log(db)
            const usersRef = db.ref("users")
            usersRef.push({
                firstName: current?.firstName?.value,
                lastName: current?.lastName?.value,
                email: current?.email?.value,
                password: current?.password?.value,
            })
            console.log({ usersRef });
        }

    };

    console.info(watch("email")); // watch input value by passing the name of it

    return (
        <Container className={classes.root}>
            <Paper>
                <Typography variant="h6">
                    Register
                </Typography>
                <form onSubmit={event => handleOnSubmit(event)} ref={ref}>
                    <TextField
                        name="firstName"
                        type={"text"}
                        ref={register({ required: true })}
                        placeholder="First Name"
                        error={errors?.firstName}
                        helperText={errors?.firstName && "This field is required"}
                        inputProps={{
                            'aria-label': 'firstName',
                            "name":"firstName"
                        }}
                    />

                    <TextField
                        name="lastName"
                        type={"text"}
                        ref={register({ required: true })}
                        placeholder="Last Name"
                        error={errors?.lastName}
                        helperText={errors?.lastName && "This field is required"}
                        inputProps={{
                            'aria-label': 'lastName',
                            "name":"lastName"
                        }}
                    />

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
                    Already registered? <Link to={ROUTES.signIn}>Log in</Link>
                </Typography>
            </Paper>
        </Container>
    );
}
