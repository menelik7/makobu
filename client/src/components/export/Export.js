import "./Export.css";
import React from "react";
import PulsesOilSeedsAndSpices from "./PulsesOilSeedsAndSpices";
import Coffee from "./Coffee";
import { ReactComponent as Experience } from "../svg/experience.svg";
import Footer from "../footer/Footer";

// It is our mission to offer selective Premium Coffee with the best
// characteristics in providing a beverage of ideal aroma and taste
// which will surpass its competitors.

class Exports extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="col-12 no-pad">
				<div className="no-pad export-main-div">
					<div className="container large-top-padding exportable-products">
						<h5 className="bold green-2 small-bottom-margin">
							Our main exportable products
						</h5>
						<h1 className="col-sm-8 col-lg-7 no-pad large-text">
							Premium-quality Ethiopian commodities
						</h1>
						<p className="grey no-mar">
							Our decades of close relationship with small holder-farmers has
							led us to enter the export market with solid knowledge and market
							linkages. Through a dedicated team of 36 full-time employees, our
							company is able to reliably export the following:
						</p>
						<Coffee />
						<PulsesOilSeedsAndSpices />
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
				<Footer />
			</div>
		);
	}
}

export default Exports;
