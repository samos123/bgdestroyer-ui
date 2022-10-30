import React, { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import { auth } from "../lib/initFirebase.js";
import { sendEmailVerification } from "firebase/auth";

import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";

export default function SignUp() {
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();
    const [emailError, setEmailError] = useState("");

    if (user && !user.emailVerified) {
        sendEmailVerification(user, {
            url: window.location.protocol + "//" + window.location.host,
        })
            .then(() => {
                router.push("/verify-email");
            })
            .catch((err) => setEmailError(err.message));
        if (error) {
            return <p>Error sending verification email: {emailError}.</p>;
        }
        return (
            <p>Verification email has been sent. Please verify your email.</p>
        );
    }

    if (user) {
        router.push("/");
        return <p>Already logged in. Redirecting to home.</p>;
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <section className="vh-100">
            <div className="container mt-2">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <h1>Sign Up for a free account</h1>
                        <p>
                            Get 20 background image removal credits per month by
                            signing up
                        </p>
                    </div>
                    <SignUpForm />
                </div>
            </div>
        </section>
    );
}
