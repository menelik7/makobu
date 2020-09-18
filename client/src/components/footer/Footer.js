import React from "react";
import "./Footer.css";

class Footer extends React.Component {
	render() {
		return (
			<div className="col-12 footer-main-div no-pad">
				<div className="footer-top grey-back olive">
					<p className="align-center">I am the top of the footer</p>
				</div>
				<div className="footer-bottom brown-back white">
					<p className="align-center">
						Copyright <span className="yellow">&copy;</span> 2020. All rights
						reserved.
						<br />
						MakoBu Enterprises P.L.C.
					</p>
				</div>
			</div>
		);
	}
}

export default Footer;
