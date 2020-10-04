import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

class Profile extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div className="col-12 no-pad profile-main-div">
				<div className="banner-pic website-under-dev-pic">
					<div className="overlay"></div>
					<div className="col-lg-6 offset-lg-3 grey no-bottom-margin full-height flex-center website-under-dev">
						<div>
							<h4 className="bold white align-center">
								Website under development
							</h4>
							<p className="italic white align-center">
								We are working on this page and will have it ready soon.
							</p>
							<div className="align-center small-margin-top">
								<Link to="/">
									<button className="btn btn-success">Back to overview</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
