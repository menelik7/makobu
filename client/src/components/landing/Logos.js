import React from "react";
import _ from "lodash";
import { ReactComponent as Basf } from "../svg/basf.svg";
import { ReactComponent as Bayer } from "../svg/bayer.svg";
import { ReactComponent as Jacto } from "../svg/jacto.svg";

class PartnersLogos extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-4 flex-left">
					<Basf />
				</div>
				<div className="col-4 flex-center bayer-logo">
					<Bayer />
				</div>
				<div className="col-4 flex-right">
					<Jacto />
				</div>
			</div>
		);
	}
}

export default PartnersLogos;
