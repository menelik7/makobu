import React from "react";
import { ReactComponent as Information } from "../svg/information.svg";
import { ReactComponent as Sales } from "../svg/sales.svg";
import { ReactComponent as Support } from "../svg/customer_support.svg";

export default [
	{
		vector: <Information />,
		title: "Information",
		text: "For general inquiries from our friendly staff",
		link: "tel:+ 251 114 65 54 64",
	},
	{
		vector: <Sales />,
		title: "Sales",
		text: "To place orders and get  product information",
		link: "tel:+ 251 922 45 10 70",
	},
	{
		vector: <Support />,
		title: "Support",
		text: "To report issues or receive status updates",
		link: "mailto:kidusmichael@ethionet.et",
	},
];
