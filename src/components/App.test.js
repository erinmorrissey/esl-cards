import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// TODO: mock the fetch call made in the App component

test("renders the search form", () => {
  const { getByRole } = render(<App />);
  const searchForm = getByRole("search");
  expect(searchForm).toBeInTheDocument();
});

test("renders the loader", () => {
  const { getByText } = render(<App />);
  const loader = getByText(/loading/i);
  expect(loader).toBeInTheDocument();
});
