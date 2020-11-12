import React from "react";
import Button from "../common/Button";
import WhatWeOfferCard from "./WhatWeOfferCard";

export default [
	{
		sectionTitle: "Who we are",
		sectionHeading: "A trading company with experience",
		sectionText:
			"MakoBu Enterprises PLC is a general trading company established in 1993 with the objective to improve farmers' lives by importing and distributing premium quality agricultural inputs, spraying equipment and public health related products, and to be contribute to the modernization of agricultural practices in Ethiopia.",
		sectionFeature: (
			<Button
				divClass=""
				buttonText="About us"
				to="profile"
				buttonClass="profile-link-btn"
				arrow={true}
			/>
		),
		sectionImage: "",
	},
	{
		sectionTitle: "What we offer",
		sectionHeading: "A wide range of products and services",
		sectionText:
			"MakoBu strictly adheres to responsible and high-standard general	trading practices. Our company also contributes to the overall efforts towards possibly controlling and eradicating Malaria in Ethiopia, and understands the importance of reducing the country's		carbon footprint.",
		sectionFeature: <WhatWeOfferCard />,
		sectionImage: "",
	},
	{
		sectionTitle: "What sets us apart",
		sectionHeading: "Environmentally Friendly Conservation Agriculture ",
		sectionText:
			"MakoBu Enterprises PLC is the only private company in Ethiopia who has been promoting the successful dissemination of Conservation Agriculture technology in partnership with Monsanto and Sasakawa Global 2000, and collaboration with Ethiopian Institute of Agricultural Research, Ministry of Agriculture & Rural Development and small-holder farmers.",
		sectionFeature: "",
		sectionImage: "",
	},
];
