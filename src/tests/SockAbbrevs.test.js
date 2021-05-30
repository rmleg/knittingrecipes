import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import SockAbbrevs from "../SockComponents/SockAbbrevs";

afterEach(cleanup);

test("SockAbbrevs should contain a list", () => {
  render(<SockAbbrevs />);
  expect(screen.queryByRole("list")).toBeTruthy();
});
