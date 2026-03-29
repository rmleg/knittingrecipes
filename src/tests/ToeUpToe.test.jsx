import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import ToeUpToe from "../SockComponents/ToeUpToe";

afterEach(cleanup);

test("Toe up toe should render correctly", () => {
  const { container } = render(<ToeUpToe fullStCount="60" />);
  expect(container.firstChild).toMatchSnapshot();
});

test("Difference between toe up starting st count and final st count should be a multiple of 4", () => {
  render(<ToeUpToe fullStCount="60" />);
  let startingStCount = Number(
    screen.getByTestId("toeup-startingStCount").textContent
  );
  let fullStCount = Number(
    screen.getByTestId("toeup-finalStCount").textContent
  );
  expect((fullStCount - startingStCount) % 4).toBe(0);
  cleanup();

  render(<ToeUpToe fullStCount="64" />);
  startingStCount = Number(
    screen.getByTestId("toeup-startingStCount").textContent
  );
  fullStCount = Number(screen.getByTestId("toeup-finalStCount").textContent);
  expect((fullStCount - startingStCount) % 4).toBe(0);
  cleanup();
});
