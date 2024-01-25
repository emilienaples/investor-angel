import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/Header'
import FooterDiv from '@/components/Footer'


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <FooterDiv />
        <NextScript />
      </body>
    </Html>
  )
}
