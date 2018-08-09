import React from "react";
import {shallow} from "enzyme";
import store from "../../../store";
import ColMd from "../../../components/home/colMd";

it('renders without crashing', () => {
  shallow(<ColMd store={store}/>)
})
