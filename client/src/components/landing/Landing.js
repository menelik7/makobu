import React from "react";
import "./Landing.css";

class Landing extends React.Component {
	render() {
		return (
			<div className="col-12 landing-main-div">
				<h1 className="green align-center">
					<span className="yellow">M</span>akoBu Enterprises
				</h1>
				<div className="row">
					<div className="col-12 landing-attractions"></div>
				</div>
			</div>
		);
	}
}

export default Landing;
