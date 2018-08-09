import React from "react";
import {shallow} from "enzyme";
import store from "../../../store";
import Login from "../../../components/common/login";

it('renders without crashing', () => {
  shallow(<Login store={store}/>)
})
