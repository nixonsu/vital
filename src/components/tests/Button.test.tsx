import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "@components/Button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button", { name: "Button" });
    expect(buttonElement).toBeInTheDocument();
  });
});
