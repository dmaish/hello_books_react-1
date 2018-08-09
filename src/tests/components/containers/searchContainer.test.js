import React from "react";
import {shallow} from "enzyme";
import store from "../../../store";
import SearchBooks from "../../../components/containers/searchContainer";

it("renders without crashing", () => {
  shallow(<SearchBooks store={store}/>)
})
