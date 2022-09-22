import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Script from "next/script";
import Layout from "../components/Layout.js";
import "../styles/globals.css";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script
                id="bootstrap-cdn"
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                crossOrigin="anonymous"
            />
            <Layout>
                <Component {...pageProps} />
            </Layout>
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
                <>
                    <Script
                        strategy="lazyOnload"
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                    />

                    <Script id="google-analytics" strategy="lazyOnload">
                        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
                    </Script>
                </>
            )}
        </>
    );
}

export default MyApp;
