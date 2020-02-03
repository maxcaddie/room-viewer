//Internals
import Map from "../Map";

//Externals
import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "../../State";

it("renders the same Map as before", () => {
  var mapComponent = renderer
    .create(
      <Provider store={store}>
        <Map />
      </Provider>
    )
    .toJSON();
  expect(mapComponent).toMatchSnapshot();
});

it("has floor explination text with floor tag", () => {
  var mapComponent = renderer.create(
    <Provider store={store}>
      <Map />
    </Provider>
  );
  mapComponent.root.findByProps({ className: "floor" });
});

describe("images load correctly", () => {
  it("has an image", () => {
    var mapComponent = renderer.create(
      <Provider store={store}>
        <Map />
      </Provider>
    );
    mapComponent.root.findByType("img");
  });
});
