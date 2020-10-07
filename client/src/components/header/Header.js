import React from "react";
import "./Header.css";
import "../fonts/flaticon.css";
import { Link } from "react-router-dom";
import CompanyLogo from "../img/company_logo.png";

class Header extends React.Component {
	render() {
		return (
			<div className="col-12 white-back header-main-div">
				<div className="container">
					<div className="row">
						<div className="col-2 flex-left company-logo">
							<Link to="/">
								<img className="logo" src={CompanyLogo} alt="Company Logo" />
							</Link>
						</div>
						<div className="col-8 flex-center company-name">
							<div>
								<h2 className="green align-center">መኮቡ ኢንተርፕራይዝስ ኃ.የተ.የግ.ማ</h2>
								<h2 className="green align-center no-bottom-margin">
									MakoBu Enterprises P.L.C.
								</h2>
							</div>
						</div>
						<div className="col-2 flex-right large-menu"></div>
						<p className="col-12 italic no-bottom-margin align-center motto">
							Positioned to Serve Farmers Well Since 1993
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
