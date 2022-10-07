import React, { useState, useEffect } from "react";
import { auth, db } from "../lib/initFirebase";
import { useAuthState } from "react-firebase-hooks/auth";
import TokenButton from "../components/TokenButton";
import { doc, getDoc } from "firebase/firestore";

export default function Profile() {
    const [user, loading, error] = useAuthState(auth);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            console.log(user.uid)
            const docRef = doc(db, "Users", user.uid);
            const userSnap = await getDoc(docRef);
            if (userSnap.exists()) {
                setProfile(userSnap.data());
            }
        };
        // call the function
        fetchProfile().catch(console.error);
    }, [user]);

    if (user) {
        return (
            <div className="center">
                <p>
                    Hello {user.email}.                </p>
                {profile && <p>Credits: {profile.credits}</p>}
                <p>
 Generate a JWT token below so you can
                    call the API

                <TokenButton className="mt-2" />
            </p>
            </div>
        );
    }
}
