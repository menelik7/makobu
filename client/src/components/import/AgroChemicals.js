import _ from "lodash";
import React from "react";
import agroChemicalsContent from "./agroChemicalsContent";

class AgroChemicals extends React.Component {
	renderAgroChemicals() {
		return _.map(agroChemicalsContent, ({ title, text }, i) => {
			return (
				<li key={i} className="col-lg-10 agro-list-items">
					<div className="row">
						<div className="col-1 align-right agro-font">
							<i className="green-2 fas fa-arrow-alt-circle-right"></i>
						</div>
						<div className="col-11 agro-content">
							<div className="grey agro-title">{title}</div>
							<div className="grey agro-text">{text}</div>
						</div>
					</div>
				</li>
			);
		});
	}

	render() {
		return (
			<div className="container agro-chemicals">
				<h4 className="grey italic import-section-heading">Agro Chemicals</h4>
				<ul className="agro-list">{this.renderAgroChemicals()}</ul>
			</div>
		);
	}
}

export default AgroChemicals;
