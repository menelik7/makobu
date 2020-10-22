import React from "react";
import { Link } from "react-router-dom";

class LargeMenu extends React.Component {
	render() {
		return (
			<div className="col-2 col-xl-4 flex-right large-menu">
				<ul className="no-pad inline-list">
					<li>
						<Link to="/">
							<i className="bold flaticon-house-outline"></i>
						</Link>
					</li>
					<li>
						<Link to="/import">Import</Link>
					</li>
					<li>
						<Link to="/export">Export</Link>
					</li>
					<li>
						<Link to="/profile">Profile</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default LargeMenu;
