import _ from "lodash";
import "./Import.css";
import React from "react";
import AgroChemicals from "./AgroChemicals";
import Seminis from "./Seminis";
import Jacto from "./Jacto";
import DK777 from "./DK777";
import CleanCook from "./CleanCook";
import Interceptor from "./Interceptor";
import { ReactComponent as Affiliations } from "../svg/affiliations.svg";
import affiliationsFields from "./affiliationsFields";
import FillerImage from "../common/FillerImage";
import Footer from "../footer/Footer";

class Imports extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	renderAffiliationsLogos() {
		return _.map(affiliationsFields, ({ image, text }, i) => {
			return (
				<div
					key={i}
					className="col-sm-6 col-md-4 col-xl-2 affiliations-logo-container"
				>
					<div className="flex-center affiliation-logo">{image}</div>
					<div
						className={`grey italic align-center affiliation-text ${
							i === affiliationsFields.length - 1 ? "no-bottom-pad" : ""
						}`}
					>
						{text}
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="col-12 no-pad">
				<div className="no-pad import-main-div">
					<div className="container large-top-padding what-we-do">
						<h5 className="bold green-2 small-bottom-margin">What we import</h5>
						<h1 className="col-sm-8 col-lg-7 no-pad large-text">
							First-rate agricultural products
						</h1>
						<p className="grey no-mar">
							We take great pride in decades of partnership with world renowned
							companies such as Monsanto (now Bayer), BASF, and Jacto in order
							to supply our farmers, only products of the highest quality, with
							the well-being of the public and conservation of our environment
							in mind.
						</p>
					</div>

					<AgroChemicals />
					<Seminis />

					<div className="light-green-back large-top-padding large-bottom-padding">
						<div className="container">
							<h4 className="green no-pad align-center small-bottom-margin">
								ADDITIONAL PRODUCTS
							</h4>
							<hr className="add-prod-hr" />
							<Jacto />
							<DK777 />
							<CleanCook />
							<Interceptor />
						</div>
					</div>

					<FillerImage imageClass="quality-pic" text="Quality is Our Calling" />

					<div className="large-bottom-padding white-back">
						<div className="container-fluid large-top-padding">
							<div className="flex-center">
								<div className="green-back flex-center affiliations-icon-div">
									<Affiliations />
								</div>
							</div>
							<h5 className="green align-center affiliations-title">
								Affiliations
							</h5>
							<div className="row">
								<div className="col-xl-1"></div>
								{this.renderAffiliationsLogos()}
								<div className="col-xl-1"></div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Imports;
