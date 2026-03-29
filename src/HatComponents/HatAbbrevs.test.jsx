import React from "react";
import { render, screen } from "@testing-library/react";
import HatAbbrevs from "./HatAbbrevs";

test("<HatAbbrevs />", () => {
  render(<HatAbbrevs />);
  expect(screen.queryByRole("list")).toBeTruthy();
});
