import React from "react";

import { Header } from "./Header";
import "./page.css";
import { AppProps } from "../components/App";
import { Area } from "./Area";

export const Page = (appProps: AppProps) => {
  console.log(appProps);
  return (
    <article>
      <Header {...appProps} />

      <section>
        <h1>Area with {appProps.point_count} points</h1>
        <Area {...appProps} />
      </section>
    </article>
  );
};
