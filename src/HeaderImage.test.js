import React from "react";
import { render, screen } from "@testing-library/react";
import HeaderImage from "./HeaderImage";

test("HeaderImage renders an image with alt text", () => {
  render(<HeaderImage alt="test" />);
  expect(screen.getByRole("img")).toHaveAttribute("alt", "test");
});
