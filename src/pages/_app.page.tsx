import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { GlobalStyles } from "../styles/theme/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={GlobalStyles}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
