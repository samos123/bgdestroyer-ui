import React from "react";
import Link from "next/link";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="content pt-4 my-md-5 pt-md-5 border-top">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md">
                        <small className="d-block mb-3 text-muted">
                            bgdestoyer © 2022-{year}
                        </small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                            <li>
                                <Link href="/about">
                                    <a className="text-muted">bgdestroyer</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms">
                                    <a className="text-muted">
                                        Terms of Service
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy">
                                    <a className="text-muted">Privacy Policy</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Links</h5>
                        <ul className="list-unstyled text-small">
                            <li>
                                <a
                                    className="text-muted"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://github.com/samos123/bgdestroyer"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li className="mt-1">
                                <a
                                    className="text-muted"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.producthunt.com/posts/bgdestroyer"
                                >
                                    ProductHunt
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
