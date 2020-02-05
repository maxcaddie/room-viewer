//Internals
import App from "../App";
import Map from "../../Map/Map";

//Externals
import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "../../State";

it("the outermost div has the className app", () => {
  const appComponent = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const element = appComponent.root.findByType("div");
  expect(element.props.className.includes("App")).toBeTruthy();
});

it("includes a map component", () => {
  const appComponent = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );
  appComponent.root.findByType(Map);
});
