import React from "react";
import "./Contact.css";
import "../fonts/flaticon.css";
import Feedback from "../feedback/Feedback";
import { Link } from "react-router-dom";

class Contact extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="col-12 no-pad contact-main-div">
				<div className="banner-pic website-under-dev-pic">
					<div className="overlay"></div>
					<div className="col-lg-6 offset-lg-3 grey no-bottom-margin full-height flex-center website-under-dev">
						<div>
							<h4 className="bold white align-center">
								Website under development
							</h4>
							<div className="flex-center circle">
								<i className="white flaticon-next-1"></i>
							</div>
							<p className="italic white no-bottom-margin align-center">
								Enjoy the following overview and check back with us soon:
							</p>
						</div>
					</div>
				</div>

				<div className="white-back">
					<div className="container large-top-padding feedback-form">
						<div className="row">
							<div className="col-10 offset-1 col-sm-6 offset-sm-3 col-lg-5 offset-lg-0 dropusaline-pic"></div>
							<div className="col-sm-8 col-lg-6 offset-lg-1">
								<h5 className="green-2 small-bottom-margin">Got questions?</h5>
								<h1 className="no-pad large-text">Drop us a line</h1>
								<p className="no-pad grey small-bottom-margin">
									We are here to help and answer any questions. We look forward
									to hearing from you!
								</p>
								<Feedback />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
