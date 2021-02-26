import React from "react";
import Button from "../common/Button";

export default [
	{
		picture: "intro-pic-1",
		title: "Import and Distribution",
		text: "High-Standard Agricultural Inputs and Equipment.",
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
		text: "We export Ethiopian coffee, oil seeds, cereals, pulses, and spices.",
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
		title: "A Climate Smart Agriculture",
		text: "Promoters of Conservation Agriculture in Ethiopia.",
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
