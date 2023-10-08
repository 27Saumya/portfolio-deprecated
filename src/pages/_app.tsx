import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from 'next/head';

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  components: {
    Link: {
      baseStyle: {
        "&:hover": { textDecoration: "none" },
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Saumya</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
