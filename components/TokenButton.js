import React, { useState } from "react";
import { auth } from "../lib/initFirebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "react-bootstrap/Button";

export default function TokenButton({className}) {
    const [user, loading, error] = useAuthState(auth);
    const [token, setToken] = useState("");

    const getToken = () => {
        setToken("Retrieving token...");
        console.log(user);
        user.getIdToken(true).then(function (token) {
            setToken(token);
        });
    };

    return (
        <div className="tokenbutton ${className}">
            <Button onClick={getToken}>Get Token for API access</Button>
            {token && (
                <>
                    <p>The token below is valid for 1 hour:</p>
                    <p>{token}</p>
                    <Button variant="outline-success" onClick={() => {navigator.clipboard.writeText(token)}}>Copy to clibpoard</Button>
                </>
            )}
        </div>
    );
}
