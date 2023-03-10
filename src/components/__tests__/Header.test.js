import { render } from "@testing-library/react";
import Headeer from "../Header";

test("Logo should load on rendering header", () => {
  // Load Header
  const header = render(<Headeer />);

  console.log(header);
  //Check if logo is loaded
});
