import React from "react";
import {shallow} from "enzyme";
import store from "../../../store";
import AdminDashboard from "../../../components/dashboard/adminDashboard";

it('renders without crashing', () => {
  shallow(<AdminDashboard store={store}/>)
})
