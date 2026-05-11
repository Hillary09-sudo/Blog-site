import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders App with header, about, and article list", () => {
  render(<App />);

  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Underreacted"
  );
  expect(screen.getByAltText("blog logo")).toBeInTheDocument();
  expect(screen.getByText(/A blog about learning React/i)).toBeInTheDocument();
  expect(screen.getAllByRole("article")).toHaveLength(3);
});
