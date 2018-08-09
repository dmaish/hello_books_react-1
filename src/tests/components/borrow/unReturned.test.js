import React from "react";
import {shallow} from "enzyme";
import store from "../../../store";
import UnReturnedBook from "../../../components/borrow/unReturned";

it("renders without crashing", () => {
	shallow(<UnReturnedBook store={store}/>);
});
