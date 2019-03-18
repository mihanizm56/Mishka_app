import React from "react";
import { GreenCardParagraph, SVGForPage } from "../../../components";
import "./GreenCard.css";

export const GreenCard = ({ text, icon, backgroundColor }) => {
	//console.log("text", text, "icon", icon, "backgroundColor", backgroundColor);
	return (
		<div className="green-card-wrapper" style={{ backgroundColor: `${backgroundColor}` }}>
			<GreenCardParagraph text={text} />
			<SVGForPage icon={icon} />
		</div>
	);
};

GreenCard.defaultProps = {
	text: "default text",
	icon: "vase",
	backgroundColor: "#63D1BB",
};
