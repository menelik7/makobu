import React from "react";
import _ from "lodash";
import "./Contact.css";
import "../fonts/flaticon.css";
import Feedback from "../feedback/Feedback";
import meansOfContactFields from "./meansOfContactFields";
import OfficeLocation from "../google-map/OfficeLocation";

class Contact extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	renderMeansOfContact() {
		return _.map(meansOfContactFields, ({ vector, title, text, link }, i) => {
			return (
				<div key={i} className="col-md-4 means">
					<div className="white-back">
						<div className="flex-center means-vector">{vector}</div>
						<div className="col-8 offset-2 col-md-12 offset-md-0 col-lg-8 offset-lg-2 means-content">
							<h5 className="dark-blue align-center means-title">{title}</h5>
							<p className="grey align-center means-text">{text}</p>
							<div className="flex-center">
								<a href={link} className="green-back flex-center circle">
									<i className="white fas fa-chevron-right"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="col-12 no-pad contact-main-div">
				<div className="large-bottom-padding white-back">
					<div className="container large-top-padding">
						<div className="row">
							<div className="col-10 offset-1 col-sm-6 offset-sm-3 col-lg-5 offset-lg-1 webkit-order dropusaline-pic"></div>
							<div className="col-sm-8 col-lg-6 offset-lg-0 dropusaline">
								<h5 className="green-2 small-bottom-margin">Got questions?</h5>
								<h1 className="no-pad large-text">Drop us a line</h1>
								<p className="no-pad grey small-bottom-margin">
									We are here to help and answer any questions. We look forward
									to hearing from you!
								</p>
								<Feedback />
							</div>
						</div>
						<div className="col-sm-8 col-lg-6 no-pad">
							<h5 className="green-2 small-bottom-margin">
								Looking for something specific?
							</h5>
							<h1 className="no-pad large-text">
								Explore the following options
							</h1>
							<p className="no-pad grey small-bottom-margin drop-us-a-line-subtitle">
								Please select the relevant category below. If you don’t find
								what you need, fill out our contact form above.
							</p>
						</div>
					</div>
				</div>

				<div className="container large-top-padding means-of-contact">
					<div className="row">{this.renderMeansOfContact()}</div>
				</div>

				<div className="container large-bottom-padding large-top-padding">
					<div className="row">
						<div className="col-sm-8 col-lg-6">
							<h5 className="green-2 small-bottom-margin">
								Prefer a face-to-face?
							</h5>
							<h1 className="no-pad large-text">Visit our location</h1>
							<p className="no-pad grey small-bottom-margin">
								If you're having difficulties finding us, you can reach out
								using one of the means above. We look forward to seeing you!
							</p>
						</div>
						<div className="col-lg-12 contact-us-map">
							<OfficeLocation />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
