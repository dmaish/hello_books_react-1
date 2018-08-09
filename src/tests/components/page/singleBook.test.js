import React from "react";
import {shallow} from "enzyme";
import store from "../../../store";
import SingleBook from "../../../components/page/singleBook";

it('renders without crashing', () => {
  shallow(<SingleBook store={store}/>)
})
