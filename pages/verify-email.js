import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "../lib/initFirebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { sendEmailVerification } from "firebase/auth";
import Button from "react-bootstrap/Button";

function VerifyEmail() {
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();
    const [time, setTime] = useState(60);
    const [timeActive, setTimeActive] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            user?.reload()
                .then(() => {
                    if (user?.emailVerified) {
                        clearInterval(interval);
                        router.push("/");
                    }
                })
                .catch((err) => {
                    alert(err.message);
                });
        }, 1000);
    }, [user, router]);

    useEffect(() => {
        let interval = null;
        if (timeActive && time !== 0) {
            interval = setInterval(() => {
                setTime((time) => time - 1);
            }, 1000);
        } else if (time === 0) {
            setTimeActive(false);
            setTime(60);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timeActive, time, setTimeActive]);

    const resendEmailVerification = () => {
        window.gtag("event", "send-verification-email", {
            event_category: "engagement",
            non_interaction: true,
        });
        sendEmailVerification(user, {
            url: window.location.protocol + "//" + window.location.host,
        })
            .then(() => {
                setTimeActive(true);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <div className="center">
            <div className="verifyEmail">
                <h1>Verify your Email Address</h1>
                <p>
                    <strong>A Verification email has been sent to:</strong>
                    <br />
                    <span>{user?.email}</span>
                </p>
                <p>
                    Follow the instruction in the email to verify your account
                </p>
                <p>Didn{"'"}t receive the email yet? You can resend it below</p>
                <Button onClick={resendEmailVerification} disabled={timeActive}>
                    Resend Email {timeActive && "in " + time + " seconds"}
                </Button>
            </div>
        </div>
    );
}

export default VerifyEmail;
