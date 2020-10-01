import React from "react";
import _ from "lodash";

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

const generalInformation = [
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

const followUs = ["twitter", "facebook-square", "instagram"];

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
	return _.map(generalInformation, ({ icon, link, texts }, i) => {
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
	return _.map(followUs, (icon, i) => {
		return <i key={i} className={`fab fa-${icon} footer-icon larger-icon`}></i>;
	});
}

export const ContactUs = () => {
	return (
		<div className="col-sm-6 col-lg-4 footer-content">
			<div className="green-2 footer-title">Contact Us</div>
			{parseContactInfo()}
		</div>
	);
};

export const GeneralInformation = () => {
	return (
		<div className="col-sm-6 col-lg-4 footer-content">
			<div className="green-2 footer-title">General Information</div>
			{parseGeneralInfo()}
		</div>
	);
};

export const FollowUs = () => {
	return (
		<div className="col-sm-6 col-lg-12 green-2">
			<div className="footer-title">Follow Us</div>
			{parseFollowInfo()}
		</div>
	);
};
