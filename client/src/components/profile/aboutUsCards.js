import _ from "lodash";
import React from "react";
import aboutUsCardsContent from "./aboutUsCardsContent";

class AboutUsCards extends React.Component {
	renderAboutUsCards() {
		return _.map(aboutUsCardsContent, ({ icon, title, content }, i) => {
			return (
				<div key={i} className="col-sm-6 profile-card-container">
					<div className="container white-back profile-card">
						<div className="row">
							<div className="col-md-2">{icon}</div>
							<div className="col-md-10">
								<div className="row">
									<div className="col-12 black flex-left no-bottom-margin profile-card-title">
										{title}
									</div>
									<div className="col-12 profile-card-content">
										{i === 0 ? (
											content
										) : (
											<p className="grey italic profile-card-content-margin">
												{content}
											</p>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div className="row">{this.renderAboutUsCards()}</div>;
	}
}

export default AboutUsCards;
