import _ from "lodash";
import React from "react";
import jactoContent from "./jactoContent";
import JactoImage from "../img/jacto.jpg";

class Jacto extends React.Component {
	renderJacto() {
		return _.map(jactoContent, (text, i) => {
			return (
				<li key={i} className="jacto-list-item">
					<div className="row">
						<div className="col-2 align-right jacto-font">
							<i className="green-2 far fa-arrow-alt-circle-right"></i>
						</div>
						<div className="col-10 grey no-left-pad jacto-text">{text}</div>
					</div>
				</li>
			);
		});
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-6 additional-products">
					<div className="white-back flex-center jacto-pic-div">
						<img className="jacto-pic" src={JactoImage} alt="Jacto" />
					</div>
				</div>
				<div className="col-md-6 additional-products">
					<div className="flex-center full-height jacto-list-div">
						<div>
							<h4 className="green italic align-center small-bottom-margin no-top-margin import-section-heading">
								JACTO Manual Knapsack Sprayer
							</h4>
							<ul className="full-width jacto-list">{this.renderJacto()}</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Jacto;
