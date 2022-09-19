import React, { useState, useEffect } from "react";
import { auth } from "../lib/initFirebase.js";
import { sendPasswordResetEmail } from "firebase/auth";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

export default function ResetPasswordForm() {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState("")

    const sendEmail = () => {
        setSending(true)
        sendPasswordResetEmail(auth, email).then(() => {
            setSuccess(true)
            setError("")
            setSending(false)
        }).catch((err) => {
            setError(err)
            setSending(false)
        });
    };

    if (sending) {
        return <p>Sending...</p>;
    }
    return (

            <Form onSubmit={sendEmail} id="login">
            {success && (
                <Alert variant="success">
                    A link to reset password your password has been sent to {email}. Please check
                    your email.
                </Alert>
            )}
            {error && <Alert variant="danger">{error.message}</Alert>}
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Enter email"
                    />
                </Form.Group>
            <Button onClick={sendEmail}>Reset password</Button>
        </Form>
    );
}
