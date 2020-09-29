import React from "react";
import "./Header.css";
import "../fonts/flaticon.css";
import CompanyLogo from "../img/company_logo.png";

class Header extends React.Component {
	render() {
		return (
			<div className="container header-main-div">
				<div className="row">
					<div className="col-2 flex-left company-logo">
						<img className="logo" src={CompanyLogo} alt="Company Logo" />
					</div>
					<div className="col-8 flex-center company-name-and-motto">
						<div>
							<h2 className="green align-center">መኮቡ ኢንተርፕራይዝስ ኃ.የተ.የግ.ማ</h2>
							<h2 className="green align-center">MakoBu Enterprises P.L.C.</h2>
							<p className="italic grey align-center no-bottom-margin motto">
								Positioned to Serve Farmers Well Since 1993
							</p>
						</div>
					</div>
					<div className="col-2 flex-right large-menu"></div>
				</div>
			</div>
		);
	}
}

export default Header;
