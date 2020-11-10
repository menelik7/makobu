import _ from "lodash";
import React from "react";
import jactoContent from "./jactoContent";
import JactoImage from "../img/jacto.jpg";
import JactoImageTwo from "../img/jacto-2.jpg";

const images = [JactoImage, JactoImageTwo];
const imageClasses = ["jacto-pic", "jacto-pic-2"];

const sortImages = (num) => {
	return images[num];
};

const sortImageClasses = (num) => {
	return imageClasses[num];
};

class Jacto extends React.Component {
	render() {
		return _.map(jactoContent, ({ model, descriptions }, i) => {
			return (
				<div key={i} className="row">
					<div
						className={`col-md-6 ${
							i === 1 ? "webkit-order" : ""
						} additional-products`}
					>
						<div className="white-back flex-center jacto-pic-div">
							<img
								className={sortImageClasses(i)}
								src={sortImages(i)}
								alt={model}
							/>
						</div>
					</div>
					<div className="col-md-6 additional-products">
						<div className="flex-center full-height jacto-list-div">
							<div>
								<h4 className="green italic align-center small-bottom-margin no-top-margin import-section-heading">
									{model}
								</h4>
								<ul className="full-width jacto-list">
									{_.map(descriptions, (text, i) => {
										return (
											<li key={i} className="jacto-list-item">
												<div className="row">
													<div className="col-2 align-right jacto-font">
														<i className="green-2 far fa-arrow-alt-circle-right"></i>
													</div>
													<div className="col-10 grey no-left-pad jacto-text">
														{text}
													</div>
												</div>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			);
		});
	}
}

export default Jacto;
