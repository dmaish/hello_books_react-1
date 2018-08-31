import React from "react";
import {shallow} from "enzyme";
import store from "../../../store";
import BorrowPopUp from "../../../components/popups/borrowPopUp";

it("renders without crashing", () => {
	shallow(<BorrowPopUp store={store}/>);
});
