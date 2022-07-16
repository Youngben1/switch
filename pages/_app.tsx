import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from "../components/Navbar";
import {SessionProvider} from "next-auth/react"

function MyApp({ session, Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={session}>
    <Navbar />
    <Component {...pageProps} />
    </SessionProvider>
    ) 
}

export default MyApp
