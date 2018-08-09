import React from "react";
import {shallow} from "enzyme";
import BlockDiv from "../../../components/common/block";

it('renders without crashing', () => {
  shallow(<BlockDiv/>)
})
