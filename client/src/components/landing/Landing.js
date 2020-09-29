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
							<div className="col-10 green flex-left no-bottom-margin card-title">
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
					<div className="green export-title">{title}</div>
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
			);
		});
	}

	render() {
		return (
			<div className="container landing-main-div">
				<div className="col-lg-6 offset-lg-3 alert alert-secondary grey website-under-dev">
					<div className="row">
						<div className="col-2 col-lg-1 flex-top">
							<i className="fa fa-bullhorn fa-2x"></i>
						</div>
						<div className="col-10 col-lg-11">
							Website under development. Enjoy the following overview and check
							back with us soon:
						</div>
					</div>
				</div>

				<div className="large-top-padding who-we-are">
					<h5 className="green small-bottom-margin">Who we are</h5>
					<h1 className="grey large-text">A general trading company</h1>
					<p className="grey small-bottom-margin">
						MakoBu Enterprises PLC is a general trading company established in
						1993 with the the objective to improve farmers' lives by importing
						and distributing premium quality agricultural inputs, spraying
						equipment and public health related products, and to be contribute
						to the modernization of agricultural practices in Ethiopia.
					</p>
					<div className="row">{this.renderWhoWeAreCards()}</div>
				</div>

				<div className="large-top-padding what-we-do">
					<h5 className="bold green small-bottom-margin">What we do</h5>
					<h1 className="grey large-text">Import and distribution</h1>
					<p className="grey">
						MakoBu Enterprises PLC currently imports and distributes, registered
						high-standard agricultural inputs such as{" "}
						<span className="green bold">
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
						<span className="green bold"> INTERCEPTOR from BASF</span>.
					</p>
					<p className="grey small-bottom-margin">
						MakoBu understands the importance of reducing our carbon footprint
						to the extent possible, therefore in order to contribute to this end
						we import and distribute Clean Cook Stove (CCS) which utilizes
						Ethanol, the virtually carbon-emission free household gas fuel, with
						a goal of manufacturing these stoves locally starting in the near
						future.
					</p>
				</div>

				<div className="large-top-padding exportable-products">
					<h5 className="bold green small-bottom-margin">
						Our main exportable products
					</h5>
					<h1 className="grey large-text">We care about our resources</h1>
					<p className="grey">
						It is our mission to offer selective Premium Coffee with the best
						characteristics in providing a beverage of ideal aroma and taste
						which will surpass its competitors.
					</p>
					<div className="row">{this.renderOurMainExportableProducts()}</div>
				</div>

				<div className="experience">
					<div className="align-center">
						<Experience />
						<p className="col-lg-8 offset-lg-2 grey italic experience-paragraph">
							We have maintained a very important culture from day one - stay in
							close relationship with small holder farmers in different regions
							throughout the country and ascertain that we directly source and
							export products of the highest quality.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
