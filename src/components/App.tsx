import React from "react";
import { Page } from "../stories/Page";

export interface AppProps {
  point_count: number;
}

export class App extends React.Component {
  state: AppProps = {
    point_count: 20,
  };

  render() {
    return <Page {...this.state} />;
  }
}
