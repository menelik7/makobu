import React from "react";
import AboutUsCards from "./AboutUsCards";
import FillerImage from "../common/FillerImage";

export default [
	{
		sectionTitle: "About us",
		sectionHeading: "We aim to serve our farmers and clients well",
		sectionText: [
			"MakoBu Enterprises PLC is a general trading company established in 1993. For over 25 years, we have built strong relationship and partnerships with smallholder farmers in many regions of Ethiopia allowing us to enter the export market with solid value chain and sourcing capabilities of commodities of the highest quality.",
			"Since our establishment, we have been representing world renowned agricultural input and equipment suppliers: -Monsanto (now Bayer), BASF and Jacto, supporting them technically in market development works, final registration of their products and business growth activities in Ethiopia. ",
			"MakoBu Enterprises is also involved in technology transfer to farmers on a national scale with special emphasis towards promotion of Conservation Agriculture, a technology that would significantly reduce land degradation while increasing food crop production and improving soil fertility.",
		],
		sectionFeature: <AboutUsCards />,
		sectionImage: (
			<FillerImage
				imageClass="ecology-pic"
				text="Commitment to Sustainable Ecology"
			/>
		),
	},
	{
		sectionTitle: "What we do",
		sectionHeading: "A wide range of products and services",
		sectionText: [
			"MakoBu Enterprises PLC currently imports and distributes high-standard agricultural inputs such as Herbicides, Insecticides, Fungicides, Cotton Growth Regulator, Hybrid Vegetable and Maize Seeds, Manual Knapsack Sprayers and Long-Lasting Insecticidal Mosquito net. These products are also backed by training and excellent after sales technical support.",
			"Our decades of close relationship with small-holder farmers, has led us to enter the export market with solid knowledge and market linkages. By strictly adhering to the international quality standards, our company is able to reliably export different types of Ethiopian coffee beans, oil seeds, pulses, and spices.",
		],
		sectionFeature: "",
		sectionImage: "",
	},
];
