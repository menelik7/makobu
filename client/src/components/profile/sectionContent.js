import React from "react";
import AboutUsCards from "./AboutUsCards";
import FillerImage from "../common/FillerImage";

export default [
	{
		sectionTitle: "About us",
		sectionHeading: "We aim to serve our farmers and clients well",
		sectionText: [
			"For over 25 years, we have built strong relationships with smallholder	farmers in many regions of Ethiopia. This allows us to source	commodities of the highest quality for our diverse clients. We are	also importers and distributors of prime quality agricultural inputs,	spraying equipment and public health related products.",
			"MakoBu currently represents world renowned companies such as Monsanto,	BASF, and JACTO while supporting them technically in market					development works, final registration of their products and business growth activities in Ethiopia. The SEMINIS brand high-quality hybrid	vegetable seeds from Monsanto Seminis is the newest addition to our	line of business.",
			"MakoBu Enterprises is also involved in technology transfer to farmers	on a national scale with special emphasis towards promotion of Conservation Agriculture that would signifcantly reduce land degradation while increasing food crop production and improving soil fertility.",
			"Our company, in collaboration with Sasakawa Global 2000 (SG-2000), has	been promoting Conservation Agriculture in Ethiopia for over 13 years. The experience gained through this endeavor has positioned us well in the market, in terms of providing regular and effective technical support to our patron customers – which include large scale state and private commercial farms, cooperative union and small-holder farmers.",
		],
		sectionFeature: <AboutUsCards />,
		sectionImage: (
			<FillerImage
				imageClass="ecology-pic top-margin-on-small"
				text="Commitment to Sustainable Ecology"
			/>
		),
	},
	{
		sectionTitle: "What we do",
		sectionHeading:
			"A wide range of products and services, and a commitment to environmental methods",
		sectionText: [
			"MakoBu Enterprises PLC currently imports and distributes, registered	high-standard agricultural inputs such as SEMINIS brand vegetable seeds, Roundup, Stomp CS, Fastac 10 EC, PIX, Rex Duo, Integrity, Stellar Star and Beef Up Oil, these products are also backed by excellent after sales technical support, and trainings when necessary.",
			"In order to contribute to the overall efforts towards possiblly controlling and eradicating Malaria in the country, MakoBu imports and distributes WHOPES approved and globally accepted brand of Long-Lasting Insecticidal Mosquito Nets (LLINs), known as the					INTERCEPTOR from BASF.",
			"MakoBu understands the importance of reducing our carbon footprint to the extent possible, therefore in order to contribute to this end we import and distribute Clean Cook Stove (CCS) which utilizes Ethanol, the virtually carbon-emission free household gas fuel, with a goal of manufacturing these stoves locally starting in the near future.",
		],
		sectionFeature: "",
		sectionImage: "",
	},
];
