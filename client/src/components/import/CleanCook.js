import _ from "lodash";
import React from "react";
import cleanCookContent from "./cleanCookContent";
import CleanCookImage from "../img/cookstove.jpg";

class CleanCook extends React.Component {
	renderCleanCook() {
		return _.map(cleanCookContent, (paragraph, i) => {
			return (
				<p key={i} className="grey clean-cook-paragraphs">
					{paragraph}
				</p>
			);
		});
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-6 webkit-order additional-products">
					<div className="white-back flex-center clean-cook-pic-div">
						<img
							className="clean-cook-pic"
							src={CleanCookImage}
							alt="Clean Cook"
						/>
					</div>
				</div>
				<div className="col-md-6 additional-products">
					<div className="flex-center full-height clean-cook-content-div">
						<div>
							<h4 className="green italic align-center small-bottom-margin no-top-margin import-section-heading">
								Clean Cook Stove + Ethanol
							</h4>
							{this.renderCleanCook()}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CleanCook;
