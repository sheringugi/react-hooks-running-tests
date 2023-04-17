import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Header from "../components/Header";

// test("displays the text 'hello from the Header!'", () => {
//   render(<Header />);

//   screen.debug();

//   expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
// });

test("displays the text 'please pass this test'", () => {
  render(<Header />);

  const element = screen.queryByText("hello from the Header!");

  screen.debug(element);

  expect(element).toBeInTheDocument();
});
