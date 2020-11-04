import "./SmallMenu.css";
import React from "react";
import { Link } from "react-router-dom";

class SmallMenu extends React.Component {
	render() {
		return (
			<div className="col-2 col-xl-4 flex-right small-menu">
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
						<div className="modal-content">
							<div className="modal-header">
								<button
									type="button"
									className="btn close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<i className="light-blue fas fa-window-close"></i>
								</button>

								<button
									type="button"
									className="btn close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<i className="green-2 fas fa-window-close"></i>
								</button>
							</div>
							<div className="grey modal-title full-width align-center"></div>
							<div className="modal-body">
								<ul className="small-menu-list no-mar align-center">
									<Link to="/">
										<li data-toggle="modal" data-target="#exampleModalCenter">
											<i className="bold flaticon-house-outline"></i>
										</li>
									</Link>
									<Link to="import">
										<li data-toggle="modal" data-target="#exampleModalCenter">
											Import
										</li>
									</Link>
									<Link to="export">
										<li data-toggle="modal" data-target="#exampleModalCenter">
											Export
										</li>
									</Link>
									<Link to="profile">
										<li data-toggle="modal" data-target="#exampleModalCenter">
											Profile
										</li>
									</Link>
									<Link className="white" to="contact">
										<li data-toggle="modal" data-target="#exampleModalCenter">
											Contact
										</li>
									</Link>
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
								<div className="grey footer-bottom">
									<div className="row">
										<div className="col-xl-4 flex-center">
											<p className="align-center no-bottom-margin">
												Copyright <span className="green-2">&copy;</span> 2020.
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
