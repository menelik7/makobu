import _ from "lodash";
import React from "react";
import dk777Content from "./dk777Content";

class CleanCook extends React.Component {
	renderDK777() {
		return _.map(dk777Content, (text, i) => {
			return (
				<li key={i} className="jacto-list-item">
					<div className="row">
						<div className="col-2 align-right jacto-font">
							<i className="green-2 far fa-check-circle"></i>
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
					<div className="white-back flex-center dk777-pic-div"></div>
				</div>
				<div className="col-md-6 additional-products">
					<div className="flex-center full-height dk777-content-div">
						<div>
							<h4 className="green italic align-center small-bottom-margin no-top-margin import-section-heading">
								DK777 Hybrid Maize Leku
							</h4>
							<ul className="full-width jacto-list">{this.renderDK777()}</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CleanCook;
