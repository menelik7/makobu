import _ from "lodash";
import React from "react";
import ourMainExportableProducts from "./ourMainExportableProducts";

class Coffee extends React.Component {
	renderOurMainExportableProducts() {
		return _.map(ourMainExportableProducts, ({ picture, title, list }, i) => {
			if (i < 4) {
				return (
					<div
						key={i}
						className="col-sm-6 col-xl-4 grey exportable-products-card"
					>
						<div className={`export-pic ${picture}`}></div>
						<div className="white-back export-content">
							<div className="export-title">{title}</div>
							<div className="export-list">
								<ul>
									{_.map(list, (item, i) => {
										return (
											<li key={i}>
												<i className="far fa-arrow-alt-circle-right"></i>
												{item}
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				);
			}
			return;
		});
	}

	render() {
		return (
			<div className="coffee">
				<h4 className="black italic small-bottom-margin import-section-heading">
					Coffee
				</h4>
				<div className="row">{this.renderOurMainExportableProducts()}</div>
			</div>
		);
	}
}

export default Coffee;
