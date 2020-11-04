import _ from "lodash";
import "./Landing.css";
import "../fonts/font-awesome-all.css";
import React from "react";
import carouselItems from "./carouselItems";
import sectionContent from "./sectionContent";

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
			</div>
		);
	}
}

export default Landing;
