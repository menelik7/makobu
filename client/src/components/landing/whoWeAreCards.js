import React from "react";
import { ReactComponent as CoreValue } from "../svg/coreValue.svg";
import { ReactComponent as Eye } from "../svg/eye.svg";
import { ReactComponent as Flower } from "../svg/flower1.svg";
import { ReactComponent as People } from "../svg/people.svg";
import PartnersLogos from "./Logos";

export default [
	{
		icon: <People />,
		title: "Our Partners",
		content: <PartnersLogos />,
	},
	{
		icon: <Eye />,
		title: "Vision",
		content:
			"To contribute to the realization of a transformed, productive, and modern agricultural sector in Ethiopia.",
	},
	{
		icon: <Flower />,
		title: "Mission",
		content:
			"To provide environmentally, socially, and economically  beneficial agricultural inputs and technologies to all farming communities of Ethiopia.",
	},
	{
		icon: <CoreValue />,
		title: "Core Value",
		content:
			"To satisfy the needs of our customers and broader market through supplying ONLY prime quality products backed by technical support/services.",
	},
];
