import { render, screen } from "@testing-library/react";
import { fakeEmployees } from "../mocks/employees";
import Presentational from "./Presentational";

it("renders with expected data values", () => {
  render(<Presentational employees={fakeEmployees} />);

  expect(screen.getByRole("cell", { name: /john smith/i })).toBeInTheDocument();
  expect(
    screen.getByRole("cell", { name: /Engineering/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("cell", { name: /Designer/i })).toBeInTheDocument();
});

it("has correct class", () => {
  render(<Presentational employees={fakeEmployees} />);
  expect(screen.getByRole("table")).toHaveAttribute(
    "class",
    "table table-striped"
  );
});
