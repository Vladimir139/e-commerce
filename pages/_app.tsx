import "normalize.css";

import type { AppProps } from "next/app";
import React, { FC } from "react";

import { App } from "@/app";

// @ts-ignore
const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <App>
    <Component {...pageProps} />
  </App>
);

export default MyApp;
