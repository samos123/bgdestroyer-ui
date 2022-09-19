import { auth } from "../lib/initFirebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Profile() {
    const [user, loading, error] = useAuthState(auth);

    if (user) {
    return (
        <div className="center">
            <p>Hello {user.email}</p>
        </div>
    );
    }
}

