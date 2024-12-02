import Hello from "./Hello";

import { render, screen, fireEvent } from "@testing-library/react";

test("component should display hello text", () => {
  render(<Hello />);
  expect(screen.getByTestId(/hello/i)).toBeInTheDocument();
});

test("Button is rendered", () => {
  render(<Hello />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("When button is clicked , it should display message", () => {
  render(<Hello />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(screen.getByText("World")).toBeInTheDocument();
});
