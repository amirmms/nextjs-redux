import Head from "next/head";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import store from "../store";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div dir="rtl">
                <Container>
                    <Component {...pageProps} />
                </Container>
            </div>
        </Provider>
    );
}

export default MyApp;
