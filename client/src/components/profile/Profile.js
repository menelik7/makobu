import _ from "lodash";
import "./Profile.css";
import React from "react";
import sectionContent from "./sectionContent";
import { ReactComponent as Bullseye } from "../svg/bullseye.svg";
import objectivesList from "./objectivesList";
import Footer from "../footer/Footer";

class Profile extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	renderSectionContent() {
		return _.map(
			sectionContent,
			(
				{
					sectionTitle,
					sectionHeading,
					sectionText,
					sectionFeature,
					sectionImage,
				},
				i
			) => {
				return (
					<div key={i}>
						<div className="container large-top-padding large-bottom-padding what-we-do">
							<h5 className="bold green-2 small-bottom-margin">
								{sectionTitle}
							</h5>
							<h1 className="col-sm-8 col-lg-7 no-pad large-text">
								{sectionHeading}
							</h1>
							{_.map(sectionText, (text, j) => {
								return (
									<p
										key={j}
										className={`${
											i === sectionContent.length - 1 &&
											j === sectionText.length - 1
												? "no-mar"
												: ""
										} grey`}
									>
										{text}
									</p>
								);
							})}
							{sectionFeature}
						</div>
						{sectionImage}
					</div>
				);
			}
		);
	}

	renderObjectivesList() {
		return _.map(objectivesList, ({ font, text }, i) => {
			return (
				<div
					key={i}
					className="col-sm-8 offset-sm-2 col-lg-4 offset-lg-0 objectives-list-div-wrapper"
				>
					<div className="flex-center green-back objectives-list-div">
						<div className="row">
							<div className="col-2 no-right-pad flex-center">
								<div className="flex-center objectives-list-font-div">
									<i className={`green-2 ${font}`}></i>
								</div>
							</div>
							<div className="col-10 flex-center">
								<p className="italic white no-mar objectives-text">{text}</p>
							</div>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="col-12 no-pad">
				<div className="no-pad profile-main-div">
					{this.renderSectionContent()}

					<div className="container large-top-padding large-bottom-padding white-back">
						<div className="flex-center">
							<div className="green-2-back flex-center objectives-icon-div">
								<Bullseye />
							</div>
						</div>
						<h5 className="green-2 align-center no-mar objectives-title">
							Objectives
						</h5>
						<div className="objectives-list-container">
							<div className="row">{this.renderObjectivesList()}</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Profile;
