import React from "react";
import {shallow} from "enzyme";
import store from "../../../store";
import ReturnBookModal from "../../../components/popups/returnBookPopUp";

it("renders without crashing", () => {
	shallow(<ReturnBookModal store={store}/>);
});
