import React from "react";
import _ from "lodash";
import "./Landing.css";
import "../fonts/font-awesome-all.css";
import whoWeAreCards from "./whoWeAreCards";
import ourMainExportableProducts from "./ourMainExportableProducts";
import { ReactComponent as DoubleArrow } from "../svg/right-arrow.svg";
import { ReactComponent as Experience } from "../svg/experience.svg";

class Landing extends React.Component {
	renderWhoWeAreCards() {
		return _.map(whoWeAreCards, ({ icon, title, content }, i) => {
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

	renderOurMainExportableProducts() {
		return _.map(ourMainExportableProducts, ({ picture, title, list }, i) => {
			return (
				<div key={i} className="col-md-4 grey export-container">
					<div className={`export-pic ${picture}`}></div>
					<div className="white-back export-content">
						<div className="green-2 export-title">{title}</div>
						<div className="export-list">
							<ul>
								{_.map(list, (item, i) => {
									return (
										<li key={i}>
											<DoubleArrow className="export-list-arrow" />
											{item}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="col-12 no-pad landing-main-div">
				<div className="banner-pic website-under-dev-pic">
					<div className="overlay"></div>
					<div className="col-lg-6 offset-lg-3 grey no-bottom-margin full-height flex-center website-under-dev">
						<div>
							<h4 className="bold white align-center">
								Website under development
							</h4>
							<p className="italic white no-bottom-margin align-center">
								Enjoy the following overview and check back with us soon:
							</p>
						</div>
					</div>
				</div>

				<div className="container large-top-padding who-we-are">
					<h5 className="green-2 small-bottom-margin">Who we are</h5>
					<h1 className="large-text">A general trading company</h1>
					<p className="grey small-bottom-margin">
						MakoBu Enterprises PLC was established in 1993 with the the
						objective to improve farmers' lives by importing and distributing
						premium quality agricultural inputs, spraying equipment and public
						health related products, and to be contribute to the modernization
						of agricultural practices in Ethiopia.
					</p>
					<div className="row">{this.renderWhoWeAreCards()}</div>
				</div>

				<div className="container large-top-padding what-we-do">
					<h5 className="bold green-2 small-bottom-margin">What we do</h5>
					<h1 className="large-text">Import and distribution</h1>
					<p className="grey">
						MakoBu Enterprises PLC currently imports and distributes, registered
						high-standard agricultural inputs such as{" "}
						<span className="green-2 bold">
							SEMINIS brand vegetable seeds, Roundup, Stomp CS, Fastac 10 EC,
							PIX, Rex Duo, Integrity, Stellar Star and Beef Up Oil
						</span>
						. These products are also backed by excellent post sales technical
						support, and training as needed.
					</p>
					<p className="grey">
						In order to contribute to the overall efforts towards possibly
						controlling and eradicating Malaria in the country, MakoBu imports
						and distributes WHOPES approved and globally accepted brand of
						Long-Lasting Insecticidal Mosquito Nets(LLINs), known as the
						<span className="green-2 bold"> INTERCEPTOR from BASF</span>.
					</p>
					<p className="grey small-bottom-margin">
						MakoBu understands the importance of reducing our carbon footprint
						to the extent possible, therefore in order to contribute to this end
						we import and distribute{" "}
						<span className="green-2 bold">Clean Cook Stove (CCS)</span> which
						utilizes Ethanol, the virtually carbon-emission free household gas
						fuel, with a goal of manufacturing these stoves locally starting in
						the near future.
					</p>
				</div>

				<div className="container large-top-padding exportable-products">
					<h5 className="bold green-2 small-bottom-margin">
						Our main exportable products
					</h5>
					<h1 className="large-text">Sourcing with care</h1>
					<p className="grey">
						It is our mission to offer selective Premium Coffee with the best
						characteristics in providing a beverage of ideal aroma and taste
						which will surpass its competitors.
					</p>
					<div className="row">{this.renderOurMainExportableProducts()}</div>
				</div>

				<div className="white-back experience">
					<div className="align-center">
						<Experience />
						<p className="col-10 offset-1 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 grey italic experience-paragraph">
							Maintaining a close relationship with small holder farmers in
							different regions throughout the country is a practice that has
							long been woven into the fabric of our culture. It puts us in an
							ideal position to directly source and export products of the
							highest quality.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
