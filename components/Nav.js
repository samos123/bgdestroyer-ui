import Link from "next/link";
import logo from "../public/logo-blue.png";
import Image from "next/image";
import NavItem from "./NavItem.js";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { auth, logOut } from "../lib/initFirebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";

export default function Navigation() {
    const [user, loading, error] = useAuthState(auth);

    return (
        <header className="py-0 mb-3 border-bottom">
            <Navbar variant="light" sticky="top" expand="lg" collapseOnSelect>
                <Container>
                    <Col lg={3} xs={7}>
                        <Navbar.Brand className="p-0 m-0">
                            <Link href="/" passHref>
                                <Image
                                    src={logo}
                                    layout="responsive"
                                    width={1492}
                                    height={416}
                                    alt="logo"
                                />
                            </Link>
                        </Navbar.Brand>
                    </Col>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="offset-lg-1" variant="pills">
                            {/*<ul className="col-6 nav nav-collapse collapse nav-pills"> */}
                            <NavItem url="/">Home</NavItem>
                            <NavItem url="/pricing">Pricing</NavItem>
                            <NavItem url="/api-docs">API & Docs</NavItem>
                            <NavItem url="/contact">Contact</NavItem>
                        </Nav>
                        <Nav className="offset-lg-1" variant="pills">
                            {user === null && loading == false && (
                                <>
                                    <NavItem url="/signup" activeClassName="">
                                        <Button variant="outline-success">
                                            Sign Up
                                        </Button>
                                    </NavItem>
                                    <li className="nav-item nav-link">
                                        <LoginButton />
                                    </li>
                                </>
                            )}

                            {user && (
                                <>
                                    <NavItem url="/profile" activeClassName="">
                                        Account Settings
                                    </NavItem>
                                    <Button
                                        variant="outline-primary"
                                        onClick={logOut}
                                    >
                                        Logout
                                    </Button>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
