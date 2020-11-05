import React from "react";
import "./Footer.css";
import "../fonts/font-awesome-all.css";
import { ContactUs } from "./footerContent";
import { GetInTouch } from "./footerContent";
import { SocialMedia } from "./footerContent";
import Subscription from "../subscription/Subscription";
import { QuickLinks } from "./footerContent";

class Footer extends React.Component {
	render() {
		return (
			<div className="col-12 footer-main-div no-pad">
				<div className="footer-top light-green-back">
					<div className="container">
						<div className="row">
							<ContactUs />
							<GetInTouch />
							<div className="col-lg-4 footer-content">
								<div className="row">
									<SocialMedia />
									<div className="col-sm-6 col-lg-12 green">
										<div className="footer-title">Stay Informed</div>
										<Subscription />
									</div>
								</div>
							</div>
							<QuickLinks />
						</div>
					</div>
				</div>
				<div className="green-back white footer-bottom">
					<div className="row">
						<div className="col-xl-4 flex-center">
							<p className="no-bottom-margin">
								Copyright <span className="purple">&copy;</span> 2020. All
								rights reserved.
							</p>
						</div>
						<div className="col-xl-4 flex-center side-borders">
							<p className="bold no-bottom-margin">MakoBu Enterprises P.L.C.</p>
						</div>
						<div className="col-xl-4 align-center design-credit">
							<div className="row full-height">
								<div className="col-2 col-sm-4 col-xl-2 flex-center initials">
									<a
										href="https://menelik7.github.io/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Mt
									</a>
								</div>
								<div className="col-8 col-sm-4 col-xl-8 flex-center align-center my-name">
									Menelik W. Tefera
								</div>
								<div className="col-2 col-sm-4 col-xl-2 flex-center github">
									<a
										href="https://github.com/menelik7"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fab fa-github" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
