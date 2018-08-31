import React from "react";
import {shallow} from "enzyme";
import store from "../../../store";
import DeletePopUp from "../../../components/popups/deleteBookPopUp";

it("renders without crashing", () => {
	shallow(<DeletePopUp store={store}/>);
});
