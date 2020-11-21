import React from "react";
import { ReactComponent as CoreValue } from "../svg/coreValue.svg";
import { ReactComponent as Eye } from "../svg/eye.svg";
import { ReactComponent as Flower } from "../svg/flower1.svg";
import { ReactComponent as People } from "../svg/people.svg";
import PartnersLogos from "./Logos";

export default [
	{
		icon: <People />,
		title: "Partners",
		content: <PartnersLogos />,
	},
	{
		icon: <Eye />,
		title: "Vision",
		content:
			"To positively contribute towards the realization of uniformly modernized and highly productive agricultural sector in Ethiopia.",
	},
	{
		icon: <Flower />,
		title: "Mission",
		content:
			"To supply economically, socially, and environmentally beneficial agricultural technologies to all farming communities of Ethiopia.",
	},
	{
		icon: <CoreValue />,
		title: "Core Value",
		content:
			"To satisfy the needs of our customers and broader local and international market through supplying ONLY prime-quality products backed by technical support and post-sales services.",
	},
];
