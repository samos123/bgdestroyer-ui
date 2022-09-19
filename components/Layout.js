import Head from "next/head";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Nav from "./Nav.js";
import Footer from "./Footer.js";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>bgdestroyer - Remove background from images</title>
                <meta
                    name="description"
                    content="Remove backgrounds from your images for free automatically."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container">
                <Nav />
                <div className="content">{children}</div>
                <Footer />
            </main>
        </>
    );
}
