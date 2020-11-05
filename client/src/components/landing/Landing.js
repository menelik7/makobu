import _ from "lodash";
import "./Landing.css";
import "../fonts/font-awesome-all.css";
import React from "react";
import carouselItems from "./carouselItems";
import sectionContent from "./sectionContent";
import { ReactComponent as GraphUp } from "../svg/graph-up.svg";
import benefitsList from "./benefitsList";

class Landing extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
		// Manually Starting carousel after Link redirect since there is no page load.
		(function ($) {
			$(function () {
				$("#carouselExampleIndicators").carousel();
			});
		})(window.jQuery);
	}

	renderCarouselItemIndicator() {
		return _.map(carouselItems, ({ title }, i) => {
			return (
				<li
					key={i}
					data-target="#carouselExampleIndicators"
					data-slide-to={i}
					className={i === 0 ? "active" : null}
				/>
			);
		});
	}

	renderCarouselItems() {
		return _.map(carouselItems, ({ picture, title, text, button }, i) => {
			return (
				<div key={i} className={`carousel-item ${i === 0 ? "active" : null}`}>
					<div className="container-fluid">
						<div className="row">
							<div className="col-12 intro-pic-background">
								<div className={`full-height ${picture}`} />
								<div className="flex-center intro-pic-overlay">
									<div className="carousel-content">
										<h1 className="animated fadeInLeft align-center white no-pad carousel-title">
											{title}
										</h1>

										<p className="animated fadeInRight align-center white no-pad carousel-text">
											{text}
										</p>
										{button}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		});
	}

	renderSectionContent() {
		return _.map(
			sectionContent,
			(
				{
					sectionTitle,
					sectionHeading,
					sectionText,
					sectionFeature,
					sectionImage,
				},
				i
			) => {
				return (
					<div key={i} className="container large-top-padding what-we-do">
						<h5 className="bold green-2 small-bottom-margin">{sectionTitle}</h5>
						<h1 className="col-sm-8 col-lg-7 no-pad large-text">
							{sectionHeading}
						</h1>
						<p className="grey">{sectionText}</p>
						{sectionFeature}
						{sectionImage}
					</div>
				);
			}
		);
	}

	render() {
		return (
			<div className="col-12 no-pad landing-main-div">
				<div
					id="carouselExampleIndicators"
					className="carousel slide"
					data-ride="carousel"
				>
					<ol className="carousel-indicators">
						{this.renderCarouselItemIndicator()}
					</ol>
					<div className="carousel-inner">{this.renderCarouselItems()}</div>
				</div>

				{this.renderSectionContent()}

				<div className="container large-top-padding large-bottom-padding white-back">
					<div className="flex-center">
						<div className="black-back flex-center benefit-icon-div">
							<GraphUp />
						</div>
					</div>
					<h5 className="black align-center benefits-title">Benefits</h5>
					<div className="row">
						<div className="col-lg-10 offset-lg-1 benefits-list-div">
							<ul className="benefits-list">
								<div className="row">
									<div className="col-md-6">
										{_.map(benefitsList, (benefit, i) => {
											if (i < 5) {
												return (
													<li key={i} className="grey benefits-list-item">
														<div className="row">
															<div className="align-center col-1 no-pad">
																<i className="green-2 fas fa-check-circle"></i>
															</div>
															<div className="col-11 no-pad">{benefit}</div>
														</div>
													</li>
												);
											}
										})}
									</div>
									<div className="col-md-6">
										{_.map(benefitsList, (benefit, i) => {
											if (i >= 5) {
												return (
													<li key={i} className="grey benefits-list-item">
														<div className="row">
															<div className="align-center col-1 no-pad">
																<i className="green-2 fas fa-check-circle"></i>
															</div>
															<div className="col-11 no-pad">{benefit}</div>
														</div>
													</li>
												);
											}
										})}
									</div>
								</div>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
