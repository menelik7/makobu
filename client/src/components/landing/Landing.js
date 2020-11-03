import React from "react";
import _ from "lodash";
import "./Landing.css";
import "../fonts/font-awesome-all.css";

class Landing extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
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
					<h1 className="col-sm-8 col-lg-6 no-pad large-text">
						A trading company with experience
					</h1>
					<p className="grey small-bottom-margin">
						MakoBu Enterprises PLC is a general trading company established in
						1993 with the the objective to improve farmers' lives by importing
						and distributing premium quality agricultural inputs, spraying
						equipment and public health related products, and to be contribute
						to the modernization of agricultural practices in Ethiopia.
					</p>
				</div>

				<div className="container large-top-padding what-we-do">
					<h5 className="bold green-2 small-bottom-margin">What we do</h5>
					<h1 className="col-sm-8 col-lg-7 no-pad large-text">
						A wide range of products and services
					</h1>
					<p className="grey">
						MakoBu strictly adheres to responsible and high-standard general
						trading practices. Our company also contributes to the overall
						efforts towards possibly controlling and eradicating Malaria in
						Ethiopia, and understands the importance of reducing the country's
						carbon footprint.
					</p>
				</div>
			</div>
		);
	}
}

export default Landing;
