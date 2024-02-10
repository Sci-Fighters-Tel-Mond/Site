import React from "react";

function PageNotFoundPage() {
	return (<div className="page">
		<div className="pagenotfoundcontainer">
			<div className="pagenotfoundleft">
				<h1>404: PAGE NOT FOUND</h1>
				<h2>Possible Fixes:</h2>
				<ul>
					<li><h2>Ask Google</h2>Stuff that are embarrassing to ask people</li>
					<li><h2>Look in YouTube</h2>Again and again that cat video</li>
					<li><h2>Buy online</h2>electrical cucumber cutter</li>
				</ul>
			</div>
			<div className="pagenotfoundright">
				<br />
				<br />
				<h2>What you can't do here:</h2>
				<ul>
					<li><h2>Enter</h2>random search queries and hope that they will work</li>
				</ul>
			</div>
		</div>
	</div>)
}
export default PageNotFoundPage;