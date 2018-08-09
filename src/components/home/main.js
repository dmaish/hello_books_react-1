/**
*  The container that contains the main part of landing page
* This excludes the nav bar and footer
*/

import React from "react";
import RecentlyAdded from "./recentlyAdded";
import BreakLine from "../common/break";
import Header from "../common/header";
import BlockDiv from "../common/block";
import SearchButton from "../common/searchButton";

const Main = () => (
	<div>
			<Header/>
			<BlockDiv/>
			<BreakLine/>
			<RecentlyAdded/>
			<BreakLine/>
			<SearchButton/>
			<BreakLine/>
	</div>
);

export default Main;
