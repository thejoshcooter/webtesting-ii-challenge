import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { render } from "@testing-library/react";

describe("<App />", () => {
  describe("Component Creation", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("renders without errors", () => {
      render(<App />);
    });

  describe("Display Properties", () => {});
    it.todo('displays the count of balls and strikes for at-bat');
    it.todo('it updates when user records activity on dashboard');
    });
});
