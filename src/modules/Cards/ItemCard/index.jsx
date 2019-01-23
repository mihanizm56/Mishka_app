import React from "react";
import { ImageForPage, ParagraphForCards, TextForItems } from "../../../components";
import "./ItemCard.css";

type ItemCardType = {
	image: string,
	name: string,
	sizes: Array<string>,
	sizeValues: string,
	priceOfThisItems: number,
};

export const ItemCard = ({ image, name, sizes, sizeValues, priceOfThisItems }): ItemCardType => {
	return (
		<>
			<div className="item-card-wrapper">
				<ImageForPage image={image} />
				<div className="item-card-text-wrapper">
					<div className="item-card-textbox">
						<ParagraphForCards text={name} />
						{/* <TextParametersForItems sizes={sizes} sizeValues={sizeValues}/> */}
						<TextForItems text="test" />
					</div>
				</div>
			</div>
		</>
	);
};

ItemCard.defaultProps = {
	image: "hare",
	name: "Зайчик-попрыгайчик",
	sizes: ["Рост", "вес"],
	sizeValues: ["30 см", "200 г"],
	priceOfThisItems: 1200,
};
