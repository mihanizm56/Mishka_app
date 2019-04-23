import React, { memo } from "react";
import { SVGIcon, TahomaText } from "../../../../components";
import "./GreenCard.css";

export const GreenCard = memo(({ text, icon, backgroundColor }) => {
	//console.log("text", text, "icon", icon, "backgroundColor", backgroundColor);
	return (
		<div className="green-card-wrapper" style={{ backgroundColor: `${backgroundColor}` }}>
			<TahomaText bold text={text} classname="green-card-paragraph" />
			<SVGIcon icon={icon} />
		</div>
	);
});

GreenCard.defaultProps = {
	text: "default text",
	icon: "vase",
	backgroundColor: "#63D1BB",
};
