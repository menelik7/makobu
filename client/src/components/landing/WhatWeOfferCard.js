import _ from "lodash";
import React from "react";
import whatWeOfferCardContent from "./whatWeOfferCardContent";

class WhatWeOfferCard extends React.Component {
	renderWhatWeOfferCards() {
		return _.map(
			whatWeOfferCardContent,
			({ image, font, title, text, button }, i) => {
				return (
					<div key={i} className="col-lg-6 what-we-offer-card-container">
						<div className="container-fluid what-we-offer-card">
							<div className="row">
								<div className={`col-12 ${image}`}></div>
								<div className="col-12 what-we-offer-card-label">
									<div className="row">
										<div className="col-2 green-2-back white flex-center what-we-offer-card-font">
											<i className={font}></i>
										</div>
										<div className="col-10 black-back white italic flex-center what-we-offer-card-title">
											<h5 className="no-mar">{title}</h5>
										</div>
									</div>
								</div>
								<div className="white-back grey what-we-offer-card-text">
									<p>{text}</p>
									{button}
								</div>
							</div>
						</div>
					</div>
				);
			}
		);
	}

	render() {
		return <div className="row">{this.renderWhatWeOfferCards()}</div>;
	}
}

export default WhatWeOfferCard;
