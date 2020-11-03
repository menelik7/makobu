import _ from "lodash";
import React from "react";
import "./Export.css";
// import { Link } from "react-router-dom";
import ourMainExportableProducts from "./ourMainExportableProducts";
import { ReactComponent as Experience } from "../svg/experience.svg";

// It is our mission to offer selective Premium Coffee with the best
// characteristics in providing a beverage of ideal aroma and taste
// which will surpass its competitors.

class Exports extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	renderOurMainExportableProducts() {
		return _.map(ourMainExportableProducts, ({ picture, title, list }, i) => {
			return (
				<div
					key={i}
					className="col-sm-6 col-xl-4 grey exportable-products-card"
				>
					<div className={`export-pic ${picture}`}></div>
					<div className="white-back export-content">
						<div className="export-title">{title}</div>
						<div className="export-list">
							<ul>
								{_.map(list, (item, i) => {
									return (
										<li key={i}>
											<i className="far fa-arrow-alt-circle-right"></i>
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
			<div className="col-12 no-pad export-main-div">
				<div className="container large-top-padding exportable-products">
					<h5 className="bold green-2 small-bottom-margin">
						Our main exportable products
					</h5>
					<h1 className="col-sm-8 col-lg-7 no-pad large-text">
						Premium-quality Ethiopian commodities
					</h1>
					<p className="grey">
						Our decades of close relationship with small holder-farmers has led
						us to enter the export market with solid knowledge and market
						linkages. Through a dedicated team of 36 full-time employees, our
						company is able to reliably export the following:
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

export default Exports;
