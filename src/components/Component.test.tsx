import {render, screen} from "@testing-library/react";
import Test from "./Component";

test("Component is ok", () => {
  render(<Test />);
  const text = screen.getByText("Google");
  expect(text).toBeInTheDocument;
});
