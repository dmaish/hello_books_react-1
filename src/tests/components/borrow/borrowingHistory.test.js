import React from "react";
import {shallow} from "enzyme";
import store from "../../../store";
import BorrowHistory from "../../../components/borrow/borrowingHistory";

it('renders without crashing', () => {
    shallow(<BorrowHistory store={store}/>);
});
