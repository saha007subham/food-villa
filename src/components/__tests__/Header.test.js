import { render } from "@testing-library/react";
import Headeer from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";

test("Logo should load on rendering header", () => {
  // Load Header
  const header = render(
    <Provider store={store}>
      <Headeer />
    </Provider>
  );

  console.log(header);
  //Check if logo is loaded
});
