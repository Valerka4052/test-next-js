import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
<link rel="manifest" href="/images/site.webmanifest"></link>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;1,700&family=Roboto&family=Roboto+Mono:wght@400;600&display=swap" rel="stylesheet"/>
      </Head >
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};