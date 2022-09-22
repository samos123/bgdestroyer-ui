import { auth } from "../lib/initFirebase";
import { useAuthState } from "react-firebase-hooks/auth";
import TokenButton from "../components/TokenButton";

export default function Profile() {
    const [user, loading, error] = useAuthState(auth);

    if (user) {
        return (
            <div className="center">
                <p>
                    Hello {user.email}. Generate a JWT token below so you can call the API</p>
                <TokenButton className="mt-2" />
            </div>
        );
    }
}
