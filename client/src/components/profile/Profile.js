import _ from "lodash";
import React from "react";
import "./Profile.css";
// import { Link } from "react-router-dom";
import aboutUsCards from "./aboutUsCards";

class Profile extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	renderAboutUsCards() {
		return _.map(aboutUsCards, ({ icon, title, content }, i) => {
			return (
				<div key={i} className="col-lg-6 card-container">
					<div className="card">
						<div className="row">
							<div className="col-2">{icon}</div>
							<div className="col-10 green-2 flex-left no-bottom-margin card-title">
								{title}
							</div>
						</div>
						{i === 0 ? (
							content
						) : (
							<p className="grey italic card-content-margin">{content}</p>
						)}
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="col-12 no-pad profile-main-div">
				<div className="container large-top-padding about-us">
					<h5 className="green-2 small-bottom-margin">About us</h5>
					<h1 className="col-sm-8 col-lg-7 no-pad large-text">
						We aim to serve our farmers and clients well
					</h1>
					<p className="grey small-bottom-margin">
						For over 25 years, we have built strong relationships with
						smallholder farmers in many regions of Ethiopia. This allows us to
						source commodities of the highest quality for our diverse clients.
						We are also importers and distributors of prime quality agricultural
						inputs, spraying equipment and public health related products.
					</p>
					<p className="grey small-bottom-margin">
						MakoBu currently represents world renowned companies such as
						Monsanto, BASF, and JACTO while supporting them technically in
						market development works, final registration of their products and
						business growth activities in Ethiopia. The SEMINIS brand
						high-quality hybrid vegetable seeds from Monsanto Seminis is the
						newest addition to our line of business.
					</p>
					<p className="grey small-bottom-margin">
						MakoBu Enterprises is also involved in technology transfer to
						farmers on a national scale with special emphasis towards promotion
						of Conservation Agriculture that would signifcantly reduce land
						degradation while increasing food crop production and improving soil
						fertility.
					</p>
					<p className="grey small-bottom-margin">
						Our company, in collaboration with Sasakawa Global 2000 (SG-2000),
						has been promoting Conservation Agriculture in Ethiopia for over 13
						years. The experience gained through this endeavor has positioned us
						well in the market, in terms of providing regular and effective
						technical support to our patron customers – which include large
						scale state and private commercial farms, cooperative union and
						small-holder farmers.
					</p>
					<div className="row">{this.renderAboutUsCards()}</div>
				</div>
			</div>
		);
	}
}

export default Profile;
