import React from "react";
import "./Header.css";
import "../fonts/flaticon.css";
import { Link } from "react-router-dom";
import LargeMenu from "./LargeMenu";
import SmallMenu from "./SmallMenu";
import CompanyLogo from "../img/company_logo.png";

class Header extends React.Component {
	render() {
		return (
			<div className="col-12 white-back header-main-div">
				<div className="container-fluid">
					<div className="row">
						<div className="col-2 col-xl-4 flex-left company-logo">
							<Link to="/">
								<img className="logo" src={CompanyLogo} alt="Company Logo" />
							</Link>
						</div>
						<div className="col-8 col-xl-4 flex-center company-name">
							<div>
								<h5 className="green align-center">መኮቡ ኢንተርፕራይዝስ ኃ.የተ.የግ.ማ</h5>
								<h5 className="green align-center no-bottom-margin">
									MakoBu Enterprises P.L.C.
								</h5>
							</div>
						</div>
						<LargeMenu />
						<SmallMenu />
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
