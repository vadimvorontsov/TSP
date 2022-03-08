import React from "react";

import "./header.css";
import { Small } from "./Button.stories";

export const Header = () => (
  <header>
    <div className="wrapper">
      <div>
        <h1>Travel salesman problem</h1>
        <div>
          <Small label={"Refresh"} />
        </div>
      </div>
    </div>
  </header>
);
