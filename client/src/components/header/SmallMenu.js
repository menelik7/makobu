import "./SmallMenu.css";
import React from "react";
import { Link } from "react-router-dom";

class SmallMenu extends React.Component {
	render() {
		return (
			<div className="col-2 col-xl-4 no-pad flex-right small-menu">
				<div
					className="green no-pad flaticon-menu"
					data-toggle="modal"
					data-target="#exampleModalCenter"
				/>
				<div
					className="modal fade home-modal"
					id="exampleModalCenter"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content green-back">
							<div className="modal-header">
								<button
									type="button"
									className="btn close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<i className="green fas fa-window-close"></i>
								</button>
								<h5
									className="white modal-title full-width align-center"
									id="exampleModalCenterTitle"
								>
									<span className="company-name medium">Main Menu</span>
								</h5>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<i className="fas fa-window-close white"></i>
								</button>
							</div>
							<div className="modal-body">
								<ul className="small-menu-list align-center">
									<li data-toggle="modal" data-target="#exampleModalCenter">
										<Link to="/">
											<i className="bold flaticon-house-outline"></i>
										</Link>
									</li>
									<li data-toggle="modal" data-target="#exampleModalCenter">
										<Link to="/import">Import</Link>
									</li>
									<li data-toggle="modal" data-target="#exampleModalCenter">
										<Link to="/export">Export</Link>
									</li>
									<li data-toggle="modal" data-target="#exampleModalCenter">
										<Link to="/profile">Profile</Link>
									</li>
									<li data-toggle="modal" data-target="#exampleModalCenter">
										<Link to="/contact">Contact</Link>
									</li>
								</ul>
							</div>
							<div className="modal-footer">
								<div className="col-12 flex-center">
									<ul className="social-icons">
										<li>
											<a href="/">
												<i className="fab fa-twitter" />
											</a>
										</li>
										<li>
											<a href="/">
												<i className="fab fa-facebook-f" />
											</a>
										</li>

										<li>
											<a href="/">
												<i className="fab fa-instagram" />
											</a>
										</li>
									</ul>
								</div>
								<div className="green-back white footer-bottom">
									<div className="row">
										<div className="col-xl-4 flex-center">
											<p className="align-center no-bottom-margin">
												Copyright <span className="purple">&copy;</span> 2020.
												All rights reserved.
											</p>
										</div>
										<div className="col-xl-4 flex-center side-borders">
											<p className="bold no-bottom-margin">
												MakoBu Enterprises P.L.C.
											</p>
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
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SmallMenu;
