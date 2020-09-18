import React from "react";
import "./Header.css";
import CompanyLogo from "../img/company_logo.png";

class Header extends React.Component {
	render() {
		return (
			<div className="col-12 header-main-div flex-center">
				<img className="company-logo" src={CompanyLogo} alt="Company Logo" />
			</div>
		);
	}
}

export default Header;
