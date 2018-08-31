import React from "react";
import {shallow} from "enzyme";
import store from "../../../store";
import UserDashboard from "../../../components/dashboard/userDashboard";

it("renders without crashing", () => {
	shallow(<UserDashboard store={store}/>);
});
