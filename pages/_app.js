import '../styles/globals.css'
import Navbar from "../components/Navbar";
import {SessionProvider} from "next-auth/react"

function MyApp({ session, Component, pageProps }) {
  return (
    <SessionProvider session={session}>
    <Navbar />
    <Component {...pageProps} />
    </SessionProvider>
    ) 
}

export default MyApp
