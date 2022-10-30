import React, { useState } from "react";
import Link from "next/link";
import { auth } from "../lib/initFirebase.js";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function SignUpForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(
        auth
    );
    const [signInWithGithub, ghUser, ghLoading, ghError] = useSignInWithGithub(
        auth
    );
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
        window.gtag("event", "sign_up");
    };

    return (
        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            {error && <Alert variant="danger">{error.message}</Alert>}
            {gError && <Alert variant="danger">{gError.message}</Alert>}
            {ghError && <Alert variant="danger">{ghError.message}</Alert>}

            <Form onSubmit={register}>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Enter email"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        setTargettype="password"
                        placeholder="Password"
                        type="password"
                    />
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit" size="lg">
                        Sign Up
                    </Button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0 text-muted">
                        OR
                    </p>
                </div>

                <div className="d-grid gap-2">
                    <Button
                        variant="outline-primary"
                        size="lg"
                        onClick={() => signInWithGoogle()}
                    >
                        <img
                            className="google-icon px-3"
                            alt="Google sign-in"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                        />
                        Sign Up with Google
                    </Button>
                    <Button
                        variant="outline-primary"
                        size="lg"
                        onClick={() => signInWithGithub()}
                    >
                        <FontAwesomeIcon
                            className="px-3"
                            icon={faGithub}
                            size="xl"
                        />
                        Sign Up with GitHub
                    </Button>
                    <p>
                        Forgot your password?{" "}
                        <Link href="/reset-password">
                            <a className="link-primary">
                                Click here to reset your password
                            </a>
                        </Link>
                    </p>
                </div>
            </Form>
        </div>
    );
}
