import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

const testProps = {
  name: "Test Name",
  imageUrl: "test url",
  text: "test text",
  type: "Action",
  set: {
    name: "Test set name",
  },
};

test("renders the Card with an image element", () => {
  const { getByAltText } = render(<Card props={testProps} />);
  const img = getByAltText("Test Name");
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", expect.stringContaining("test url"));
});
