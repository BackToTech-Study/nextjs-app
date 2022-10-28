import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { ShowSignInContext } from "../components/context/globalcontext";
import { useState } from "react";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <ChakraProvider>
      <ShowSignInContext.Provider value={{ showSignIn, setShowSignIn }}>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ShowSignInContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
