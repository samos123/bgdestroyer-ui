import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "../lib/initFirebase.js";
import {
    signInWithEmailAndPassword,
    sendEmailVerification,
} from "firebase/auth";
import {
    useSignInWithGoogle,
    useSignInWithGithub,
} from "react-firebase-hooks/auth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function LoginForm() {
    const router = useRouter();
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(
        auth
    );
    const [signInWithGithub, ghUser, ghLoading, ghError] = useSignInWithGithub(
        auth
    );

    const login = (e) => {
        setError("");
        console.log(e);
        e.preventDefault();
        console.log("Logging in user");
        window.gtag("event", "login");
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                if (!auth.currentUser.emailVerified) {
                    sendEmailVerification(auth.currentUser, {
                        url:
                            window.location.protocol +
                            "//" +
                            window.location.host,
                    })
                        .then(() => {
                            router.push("/verify-email");
                        })
                        .catch((err) => setError(err.message));
                }
            })
            .catch((err) => setError(err.message));
    };

    return (
        <div>
            {error && <Alert variant="danger">{error}</Alert>}
            {gError && <Alert variant="danger">{gError.message}</Alert>}
            {ghError && <Alert variant="danger">{ghError.message}</Alert>}
            <Form onSubmit={login} id="login">
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
                    <p className="mt-2">
                        <Link href="/reset-password">
                            <a className="link-primary">
                                Forgot your password? Reset it
                            </a>
                        </Link>
                    </p>
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button
                        size="lg"
                        variant="primary"
                        type="submit"
                        form="login"
                    >
                        Login
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
                            className="google-icon-login px-2"
                            alt="Google sign-in"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                        />
                        Login with Google
                    </Button>
                    <Button
                        variant="outline-primary"
                        size="lg"
                        onClick={() => signInWithGithub()}
                    >
                        <FontAwesomeIcon
                            className="px-2"
                            icon={faGithub}
                            size="xl"
                        />
                        Login with GitHub
                    </Button>
                    <p>
                        Don{"'"}t have an account?{" "}
                        <Link href="/signup">
                            <a className="link-primary">
                                Click here to Sign Up
                            </a>
                        </Link>
                    </p>
                </div>
            </Form>
        </div>
    );
}
