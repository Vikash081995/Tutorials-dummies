import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("when everything is okay", () => {
  test("renders the app component without crashing", () => {
    render(<App />);
  });

  test("select the children tha is passed  to the customInput component", () => {
    render(<App />);
    expect(screen.getByText("Search:")).toBeInTheDocument();
  });
});
