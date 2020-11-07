import _ from "lodash";
import React from "react";
import interceptorContent from "./interceptorContent";
import InterceptorImage from "../img/interceptor.jpg";

class Interceptor extends React.Component {
	renderInterceptor() {
		return _.map(interceptorContent, (paragraph, i) => {
			return (
				<p key={i} className="grey interceptor-paragraphs">
					{paragraph}
				</p>
			);
		});
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-6 additional-products">
					<div className="white-back flex-center interceptor-pic-div">
						<img
							className="interceptor-pic"
							src={InterceptorImage}
							alt="Interceptor"
						/>
					</div>
				</div>
				<div className="col-md-6 additional-products">
					<div className="flex-center full-height interceptor-content-div">
						<div>
							<h4 className="green italic align-center small-bottom-margin no-top-margin import-section-heading">
								Long-Lasting Insecticidal Net - INTERCEPTOR
							</h4>
							{this.renderInterceptor()}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Interceptor;
