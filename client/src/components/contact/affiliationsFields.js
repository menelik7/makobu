import React from "react";
import EChamberOfCommerce from "../img/ethiopian_chamber_of_commerce.jpg";
import AAChamberOfCommerce from "../img/aa_chamber_of_commerce.jpg";
import ECommodityExchange from "../img/ethiopian_commodity_exchange_1.jpg";
import ECoffeeExportersAssociation from "../img/ethiopian_coffee_exporters_association.jpg";
import Eposspea from "../img/eposspea.JPG";

export default [
	{
		image: <img src={EChamberOfCommerce} alt="Ethiopian Chamber of Commerce" />,
		text: "Ethiopian Chamber of Commerce",
	},
	{
		image: (
			<img src={AAChamberOfCommerce} alt="Addis Ababa Chamber of Commerce" />
		),
		text: "Addis Ababa Chamber of Commerce",
	},
	{
		image: <img src={ECommodityExchange} alt="Ethiopian Commodity Exchange" />,
		text: "Ethiopian Commodity Exchange",
	},
	{
		image: (
			<img
				src={ECoffeeExportersAssociation}
				alt="Ethiopian Coffee Exporter Association"
			/>
		),
		text: "Ethiopian Coffee Exporter Association",
	},
	{
		image: (
			<img
				src={Eposspea}
				alt="Ethiopian Pulses, Oil Seeds and Spices Processors Exporters Association"
			/>
		),
		text:
			"Ethiopian Pulses, Oil Seeds and Spices Processors Exporters Association",
	},
];
