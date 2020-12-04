import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export default function Main() {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%"}}>
            <Link to={ROUTES.signIn}>Sign In</Link>
        </div>
    )
}
