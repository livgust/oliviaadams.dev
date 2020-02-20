import React from "react";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import App from "./App";
import AppBar from "@material-ui/core/AppBar";

it("has top nav bar", () => {
    const app = shallow(<App />);
    const appBar = app.find(AppBar);
    expect(appBar.length).toBe(1);
    expect(appBar.text()).toMatch("Olivia Adams");
});
