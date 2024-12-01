import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DummyApp from "./dummy-app";;

test("button starts with correct label and  color", () => {
  render(<DummyApp />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toHaveClass("red");
});

test("button has correct label and color after click", () => {
  render(<DummyApp />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toHaveClass("red");
  fireEvent.click(buttonElement);
  //check button label
  expect(screen.getByRole("button")).toHaveTextContent("Change to red");
  expect(buttonElement).toHaveClass("blue");
});

test("checkbox flow", () => {
  render(<DummyApp />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkBoxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });
  expect(buttonElement).toBeEnabled();
  expect(checkBoxElement).not.toBeChecked();
  fireEvent.click(buttonElement);
  expect(buttonElement).toBeEnabled();
});
