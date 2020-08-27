import React from "react";
import { shallow } from "enzyme";
import MenuBar, { MenuButtons } from "./MenuBar";
import Button from "@material-ui/core/Button";

it("has title", () => {
    const menu = shallow(<MenuBar />);
    expect(menu.text()).toMatch("Olivia Adams");
});

describe("buttons", () => {
    it("has group of buttons", () => {
        const menu = shallow(<MenuBar />);
        const buttonGroup = menu.find(MenuButtons);
        expect(buttonGroup).toBeDefined();
    });
    it("has three buttons with particular text", () => {
        const buttons = shallow(<MenuButtons />);
        const buttonsArray = buttons.find(Button);
        expect(buttonsArray.length).toBe(3);
        const buttonsText = buttonsArray.map(button => button.text());
        expect(buttonsText).toEqual(["Experience", "Posts", "Contact"]);
    });
});
