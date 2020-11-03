import React from "react";
import { Link } from "react-router-dom";

const Button = ({ buttonText, to }) => {
	return (
		<div className="animated fadeInUp flex-center">
			<Link to={to}>
				<button className="btn btn-success carousel-button">
					{buttonText} <span className="arrow">&#10230;</span>
				</button>
			</Link>
		</div>
	);
};

export default [
	{
		picture: "intro-pic-1",
		title: "Import and Distribution",
		text:
			"We import and distribute registered, high-standard agricultural inputs",
		button: <Button buttonText="Products" to="import" />,
	},
	{
		picture: "intro-pic-2",
		title: "Premium Ethiopian Commodities",
		text: "We export Ethiopian coffee, oil seeds, cereals pulses and spices",
		button: <Button buttonText="Products" to="export" />,
	},
	{
		picture: "intro-pic-3",
		title: "We would like to hear from you",
		text: "We are here to answer any questions and we value your feedback",
		button: <Button buttonText="Contact us" to="contact" />,
	},
];
