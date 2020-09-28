import React from "react";
import _ from "lodash";
import "./Landing.css";
import "../fonts/font-awesome-all.css";
import whoWeAreCards from "./whoWeAreCards";

class Landing extends React.Component {
	renderWhoWeAreCards() {
		return _.map(whoWeAreCards, ({ icon, title, content }, i) => {
			return (
				<div key={i} className="col-lg-6 card-container">
					<div className="card">
						<div className="row">
							<div className="col-3 col-lg-2 grey">{icon}</div>
							<div className="col-9 col-lg-10 grey flex-left no-left-pad card-title">
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
			<div className="container landing-main-div">
				<div className="col-lg-8 offset-lg-2 bold grey align-center website-under-dev">
					<p className="underline no-bottom-margin">
						Website under development.
					</p>
					<p className="underline">
						Enjoy the following overview and check back with us soon:
					</p>
				</div>

				<div className="large-top-padding who-we-are">
					<h2 className="bold green small-bottom-margin">WHO WE ARE</h2>
					<p className="grey">
						MakoBu Enterprises PLC is a general trading company established in
						1993 with the the objective to improve farmers' lives by importing
						and distributing premium quality agricultural inputs, spraying
						equipment and public health related products, and to be contribute
						to the modernization of agricultural practices in Ethiopia.
					</p>
					<div className="row">{this.renderWhoWeAreCards()}</div>
				</div>

				<div className=""></div>

				<div className="large-top-padding what-we-do">
					<h2 className="bold green small-bottom-margin">WHAT WE DO</h2>
					<p className="grey">
						MakoBu Enterprises PLC currently imports and distributes, registered
						high-standard agricultural inputs such as SEMINIS brand vegetable
						seeds, Roundup, Stomp CS, Fastac 10 EC, PIX, Rex Duo, Integrity,
						Stellar Star and Beef Up Oil. These products are also backed by
						excellent post sales technical support, and training as needed.
					</p>
					<p className="grey">
						In order to contribute to the overall efforts towards possibly
						controlling and eradicating Malaria in the country, MakoBu imports
						and distributes WHOPES approved and globally accepted brand of
						Long-Lasting Insecticidal Mosquito Nets(LLINs), known as the
						INTERCEPTOR from BASF.
					</p>
					<p className="grey">
						MakoBu understands the importance of reducing our carbon footprint
						to the extent possible, therefore in order to contribute to this end
						we import and distribute Clean Cook Stove (CCS) which utilizes
						Ethanol, the virtually carbon-emission free household gas fuel, with
						a goal of manufacturing these stoves locally starting in the near
						future.
					</p>
					<p className="grey">
						Furthermore, our decades-long close relationship with small holder
						farmers has put us in an ideal position to enter the global export
						market with solid knowledge and market linkage.
					</p>
				</div>
			</div>
		);
	}
}

export default Landing;
