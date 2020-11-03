import _ from "lodash";
import "./Landing.css";
import "../fonts/font-awesome-all.css";
import React from "react";
import carouselItems from "./carouselItems";

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

										<p className="col-10 offset-1 animated fadeInRight align-center white no-pad carousel-text">
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

				<div className="container large-top-padding who-we-are">
					<h5 className="green-2 small-bottom-margin">Who we are</h5>
					<h1 className="col-sm-8 col-lg-6 no-pad large-text">
						A trading company with experience
					</h1>
					<p className="grey">
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
