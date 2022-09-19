import Link from "next/link";
import NavItem from "./NavItem.js";

import Button from "react-bootstrap/Button";
import { auth, logOut } from "../lib/initFirebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";

export default function Nav() {
    const [user, loading, error] = useAuthState(auth);

    return (
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <Link href="/" passHref>
                <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4">bgdestroyer</span>
                </a>
            </Link>
            <ul className="col-6 nav nav-pills">
                <NavItem url="/">Home</NavItem>
                <NavItem url="/pricing">Pricing</NavItem>
                <NavItem url="/api-docs">API & Docs</NavItem>
            </ul>
            <div className="col-4">
                {user === null && loading == false && (
                    <ul className="col-6 nav nav-pills user-nav">
                        <NavItem url="/signup" activeClassName="">
                            <Button variant="outline-success">Sign Up</Button>
                        </NavItem>
                        <li className="nav-item nav-link">
                            <LoginButton />
                        </li>
                    </ul>
                )}

                {user && (
                    <ul className="nav nav-pills user-nav">
                        <NavItem url="/profile">Account Settings</NavItem>
                        <Button variant="outline-primary" onClick={logOut}>
                            Logout
                        </Button>
                    </ul>
                )}
            </div>
        </header>
    );
}
