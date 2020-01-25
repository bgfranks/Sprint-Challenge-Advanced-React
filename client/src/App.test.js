import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("check player title", () => {
  // ARRANGE
  const expectedPlayerElement = 1;

  const container = render(<App />);
  const getAllByText = container.getAllByText;

  const playerElement = getAllByText(/Player/i);

  // ASSERT
  expect(playerElement.length).toBe(expectedPlayerElement);
});
