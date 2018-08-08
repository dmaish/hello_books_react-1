/**
import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import Landing from "../../components/landing";
import Footer from "../../components/common/footer";
import NavBar from "../../components/common/navBar";
import Main from "../../components/home/main"

const renderer = new ShallowRenderer();
renderer.render(<Landing />);
const result = renderer.getRenderOutput();

expect(result.type).toBe('div');
expect(result.props.children).toEqual([
  <div className="App"><NavBar /><Main /><Footer /></div>
]);
*/
