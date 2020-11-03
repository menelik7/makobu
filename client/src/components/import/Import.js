import _ from "lodash";
import React from "react";
import "./Import.css";
// import { Link } from "react-router-dom";
import Affiliations from "../img/affiliations.png";
import affiliationsFields from "./affiliationsFields";

class Imports extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	renderAffiliationsLogos() {
		return _.map(affiliationsFields, ({ image, text }, i) => {
			return (
				<div
					key={i}
					className="col-sm-6 col-md-4 col-xl-2 affiliations-logo-container"
				>
					<div className="flex-center affiliation-logo">{image}</div>
					<div className="grey italic align-center affiliation-text">
						{text}
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="col-12 no-pad import-main-div">
				<div className="x-large-bottom-padding white-back">
					<div className="container-fluid large-top-padding">
						<div className="flex-center affiliations-pic">
							<img src={Affiliations} alt="Affiliations" />
						</div>
						<h5 className="align-center affiliations-title">Affiliations</h5>
						<div className="row">
							<div className="col-xl-1"></div>
							{this.renderAffiliationsLogos()}
							<div className="col-xl-1"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Imports;
