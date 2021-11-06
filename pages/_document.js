import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon-32x32.png" />
                    <meta name="keywords" content="Desarrollo web, desarrollo app, mantenimento empresas," />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
                    <meta name="msapplication-TileColor" content="#da532c"/>
                    <meta name="theme-color" content="#5ce0e6" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;