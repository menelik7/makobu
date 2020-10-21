import React from "react";
import _ from "lodash";
import "./Contact.css";
import "../fonts/flaticon.css";
import Feedback from "../feedback/Feedback";
import meansOfContactFields from "./meansOfContactFields";
import OfficeLocation from "../google-map/OfficeLocation";
import Affiliations from "../img/affiliations.png";
import affiliationsFields from "./affiliationsFields";

class Contact extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	renderMeansOfContact() {
		return _.map(meansOfContactFields, ({ vector, title, text, link }, i) => {
			return (
				<div key={i} className="col-md-4 means">
					<div className="white-back">
						<div className="green-back flex-center means-vector">{vector}</div>
						<div className="col-8 offset-2 col-md-12 offset-md-0 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 means-content">
							<h5 className="dark-blue align-center means-title">{title}</h5>
							<p className="grey align-center means-text">{text}</p>
							<div className="flex-center">
								<a href={link} className="green-back flex-center circle">
									<i className="white flaticon-next-1"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			);
		});
	}

	renderAffiliationsLogos() {
		return _.map(affiliationsFields, ({ image, text }, i) => {
			return (
				<div
					key={i}
					className="col-sm-6 col-md-4 col-xl-2 affiliations-logo-container"
				>
					<div className="flex-center affiliation-logo">{image}</div>
					<div className="grey italic align-center affiliation-text">
						{text}
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="col-12 no-pad contact-main-div">
				<div className="banner-pic website-under-dev-pic">
					<div className="overlay"></div>
					<div className="col-lg-6 offset-lg-3 grey no-bottom-margin full-height flex-center website-under-dev">
						<div>
							<h4 className="bold white align-center">Contact Us</h4>

							<p className="italic white no-bottom-margin align-center">
								We take pride in addressing our customers needs and concerns in
								a timely manner.
							</p>
						</div>
					</div>
				</div>

				<div className="x-large-bottom-padding white-back">
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
								We present you with a few options
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
						<div className="col-sm-8 col-lg-6 offset-lg-0">
							<h5 className="green-2 small-bottom-margin">
								Prefer a face-to-face?
							</h5>
							<h1 className="no-pad large-text">
								You're welcome to visit our office
							</h1>
							<p className="no-pad grey small-bottom-margin">
								Reach out using one of the means above if you're having
								difficulties finding us. We look forward to seeing you!
							</p>
						</div>
						<div className="col-lg-6 offset-lg-0 contact-us-map">
							<OfficeLocation />
						</div>
					</div>
				</div>

				<div className="x-large-bottom-padding white-back">
					<div className="container-fluid large-top-padding">
						<div className="flex-center affiliations-pic">
							<img src={Affiliations} alt="Affiliations" />
						</div>
						<h5 className="align-center affiliations-title">Affiliations</h5>
						<div className="row">
							<div className="col-xl-1"></div>
							{this.renderAffiliationsLogos()}
							<div className="col-xl-1"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
