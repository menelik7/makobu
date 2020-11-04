import React from "react";
import Button from "../common/Button";

export default [
	{
		image: "what-we-offer-pic-1",
		font: "fas fa-box-open",
		title: "Import and Distribution",
		text:
			"MakoBu Enterprises PLC currently imports and distributes, registered high-standard agricultural inputs backed by excellent post sales technical support, and training as needed.",
		button: (
			<Button
				divClass=""
				buttonText="Explore"
				to="import"
				buttonClass="italic what-we-offer-btn"
				arrow={true}
			/>
		),
	},
	{
		image: "what-we-offer-pic-2",
		font: "fas fa-shipping-fast",
		title: "Export",
		text:
			"We focus on the international market with the aim in promoting Ethiopian coffee beans, seeds and cereals while creating brand awareness of MakoBu’s excellence to the overseas market.",
		button: (
			<Button
				divClass=""
				buttonText="Explore"
				to="export"
				buttonClass="italic what-we-offer-btn"
				arrow={true}
			/>
		),
	},
];
// shipping-fast seedling
