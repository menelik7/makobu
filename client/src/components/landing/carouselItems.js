import React from "react";
import Button from "../common/Button";

export default [
	{
		picture: "intro-pic-1",
		title: "Import and Distribution",
		text:
			"We import and distribute registered, high-standard agricultural inputs",
		button: (
			<Button
				divClass="animated fadeInUp flex-center"
				buttonText="See our import products"
				to="import"
				buttonClass="btn-success carousel-button"
			/>
		),
	},
	{
		picture: "intro-pic-2",
		title: "Premium Ethiopian Commodities",
		text: "We export Ethiopian coffee, oil seeds, cereals pulses and spices",
		button: (
			<Button
				divClass="animated fadeInUp flex-center"
				buttonText="See our export products"
				to="export"
				buttonClass="btn-success carousel-button"
			/>
		),
	},
	{
		picture: "intro-pic-3",
		title: "You can reach out",
		text: "We are here to answer any questions and we value your feedback",
		button: (
			<Button
				divClass="animated fadeInUp flex-center"
				buttonText="Contact us"
				to="contact"
				buttonClass="btn-success carousel-button"
			/>
		),
	},
];
