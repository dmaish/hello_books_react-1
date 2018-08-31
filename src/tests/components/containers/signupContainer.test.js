import React from "react";
import {shallow} from "enzyme";
import store from "../../../store";
import SignUpContainer from "../../../components/containers/signupContainer";

it("renders without crashing", () => {
	shallow(<SignUpContainer store={store}/>);
});
