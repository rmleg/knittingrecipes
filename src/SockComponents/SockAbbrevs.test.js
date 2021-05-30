import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import SockAbbrevs from "./SockAbbrevs";

test("SockAbbrevs should contain a list", () => {
  render(<SockAbbrevs />);
  expect(screen.queryByRole("list")).toBeTruthy();
});

test("List should show correct items for direction prop", () => {
  render(<SockAbbrevs direction="toeup" />);
  expect(
    screen.getByText("kfb = k in front and back of same st")
  ).toBeVisible();
  expect(
    screen.queryByText("slip, slip, knit (left-leaning decrease)")
  ).toBeFalsy();

  cleanup();

  render(<SockAbbrevs direction="cuffdown" />);
  expect(
    screen.queryByText("kfb = k in front and back of same st")
  ).toBeFalsy();
  expect(
    screen.getByText("slip, slip, knit (left-leaning decrease)")
  ).toBeVisible();
});
