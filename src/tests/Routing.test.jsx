import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import HatGenerator from "../HatComponents/HatGenerator";
import SockGenerator from "../SockComponents/SockGenerator";

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hat" element={<HatGenerator />} />
        <Route path="/socks" element={<SockGenerator />} />
      </Routes>
    </MemoryRouter>
  );
}

test("/ renders the home page", () => {
  renderAt("/");
  expect(document.title).toBe(
    "Knitting Recipes | Knitting pattern generator for hats and socks"
  );
});

test("/hat renders the hat generator", () => {
  renderAt("/hat");
  expect(document.title).toBe("Hat Recipe | Knitting Recipes");
});

test("/socks renders the sock generator", () => {
  renderAt("/socks");
  expect(document.title).toBe("Sock Recipe | Knitting Recipes");
});

test("unknown route renders nothing", () => {
  const { container } = renderAt("/unknown");
  expect(container).toBeEmptyDOMElement();
});
