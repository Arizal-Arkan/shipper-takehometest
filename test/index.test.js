import Home from "../pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

describe("Home", () => {
  test("should render Home correctly", () => {
    render(<Home />);
  });

  test('click next and previous butoon', () => { 
    render(<Home />)

    userEvent.click(screen.getAllByRole('button'))
   })
});
