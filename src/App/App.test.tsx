import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Landing from "../Landing";
import MenuBar from "../MenuBar";

it("has nav bar and landing", () => {
    const app = shallow(<App />);
    expect(app.find(MenuBar).length).toBe(1);
    expect(app.find(Landing).length).toBe(1);
});
