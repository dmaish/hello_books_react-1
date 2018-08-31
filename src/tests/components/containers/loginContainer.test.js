import React from "react";
import {shallow} from "enzyme";
import store from "../../../store";
import LoginContainer from "../../../components/containers/loginContainer";

it("renders without crashing", () => {
	shallow(<LoginContainer store={store}/>);
});
