import React from "react";
import ReactDOM from "react-dom";
import BreakLine from "../components/common/break";

it("renders withput crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<BreakLine/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
