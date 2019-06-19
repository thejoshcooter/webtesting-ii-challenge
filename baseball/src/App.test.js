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
  });
});
