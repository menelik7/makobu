import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

const contactUs = [
	{
		icon: "phone-alt",
		texts: [
			"+ 251 114 65 54 64",
			"+ 251 114 66 08 06",
			"+ 251 922 45 10 70",
			"+ 251 935 98 71 92",
		],
	},
	{
		icon: "envelope",
		texts: ["makobu@ethionet.et", "kidusmichael@ethionet.et"],
	},
];

const getInTouch = [
	{
		icon: "map",
		link:
			"https://www.google.com/maps/place/Akaki+Kality+Sub+City+Woreda+5+Administration+Office/@8.9257753,38.7508525,14z/data=!4m8!1m2!2m1!1sAkaki+Kality+Subcity!3m4!1s0x164b83b1fa0a6d37:0x9ede393a26c3c48e!8m2!3d8.9302703!4d38.7675776",
		texts: [
			"Akaki Kality Subcity",
			"Woreda 05, House No. New",
			"P.O. Box 40391",
			"Addis Ababa, Ethiopia",
		],
	},
	{
		icon: "globe",
		link: "http://www.makobuent.com",
		texts: ["www.makobuent.com"],
	},
];

const scoialMedia = ["twitter", "facebook-square", "instagram"];

function parseContactInfo(data) {
	return _.map(contactUs, ({ icon, texts }, i) => {
		return (
			<div key={i}>
				<div className="footer-icon">
					<i className={`fas fa-${icon}`}></i>
				</div>
				{_.map(texts, (text, i) => {
					return (
						<div key={i} className="footer-text">
							<a href={`${icon === "phone-alt" ? "tel:" : "mailto:"}${text}`}>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		);
	});
}

function parseGeneralInfo(data) {
	return _.map(getInTouch, ({ icon, link, texts }, i) => {
		return (
			<div key={i}>
				<div className="footer-icon">
					<i className={`fas fa-${icon}`}></i>
				</div>
				{_.map(texts, (text, i) => {
					return (
						<div key={i} className="footer-text">
							<a href={link} target="_blank" rel="noopener noreferrer">
								{text}
							</a>
						</div>
					);
				})}
			</div>
		);
	});
}

function parseFollowInfo(data) {
	return _.map(scoialMedia, (icon, i) => {
		return (
			<div key={i} className="col-1 footer-icon">
				<i className={`fab fa-${icon} larger-icon`}></i>
			</div>
		);
	});
}

export const ContactUs = () => {
	return (
		<div className="col-sm-6 col-lg-4 footer-content">
			<div className="green footer-title">Get in touch</div>
			{parseContactInfo()}
		</div>
	);
};

export const GetInTouch = () => {
	return (
		<div className="col-sm-6 col-lg-4 footer-content">
			<div className="green footer-title">Find Us</div>
			{parseGeneralInfo()}
		</div>
	);
};

export const SocialMedia = () => {
	return (
		<div className="col-sm-6 col-lg-12 green">
			<div className="footer-title">Social Media</div>
			<div className="row">{parseFollowInfo()}</div>
		</div>
	);
};

export const QuickLinks = () => {
	return (
		<div className="col-12 grey align-center quick-links">
			<ul>
				<li>
					<Link to="/">home</Link>
				</li>
				<li>
					<Link to="/import">import</Link>
				</li>
				<li>
					<Link to="/export">export</Link>
				</li>
				<li>
					<Link to="/profile">profile</Link>
				</li>
				<li>
					<Link to="/contact">contact</Link>
				</li>
			</ul>
		</div>
	);
};
