import _ from "lodash";
import React from "react";
import seminisContent from "./seminisContent";

class Seminis extends React.Component {
	renderSeminis() {
		return _.map(seminisContent, ({ imageClass, title }, i) => {
			return (
				<div key={i} className="col-sm-6 col-lg-4 seminis-image-container">
					<div className="seminis-pic-background">
						<div className={`full-height ${imageClass}`} />
						<div className="flex-center filler-pic-overlay">
							<div className="filler-content">
								<h5 className="align-center white no-pad filler-text">
									{title}
								</h5>
							</div>
						</div>
					</div>
				</div>
			);
		});
	}
	render() {
		return (
			<div className="container seminis">
				<h4 className="black italic import-section-heading">
					SEMINIS Hybrid Seeds
				</h4>
				<p className="grey no-mar italic">
					These seeds offer increased crop yield, longer shelf-life and high
					nutritional content.
				</p>
				<div className="row">{this.renderSeminis()}</div>
			</div>
		);
	}
}

export default Seminis;
