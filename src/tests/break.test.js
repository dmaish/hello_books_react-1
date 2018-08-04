import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReactDOM from "react-dom";
import BreakLine from "../components/common/break";

configure({ adapter: new Adapter() });

describe("Test <BreakLine/>", () => {
	it("Test Render Breakline Components", () => {
		const app = shallow(<BreakLine/>);
		expect(app.contains(<BreakLine/>)).to.be.true;
	});
});
