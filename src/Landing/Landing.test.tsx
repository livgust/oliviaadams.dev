import React from "react";
import Landing from "./Landing";
import { shallow } from "enzyme";

it("renders", () => {
    expect(shallow(<Landing />)).toBeDefined();
});
