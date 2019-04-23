import React, { memo } from "react";
import { ImageForPage, VerdanaText } from "../../../../components";
import { ItemPriceBox, ItemDescriptionBox } from "../../../molecules";
import "./ItemCard.css";

type ItemCardType = {
	image: string,
	name: string,
	sizes: Array<string>,
	sizeValues: string,
	priceOfThisItems: number,
};

const configForCardCatalogImage = {
	widthMin: "260px",
	heightMin: "195px",
	widthMiddle: "334px",
	heightMiddle: "334px-",
	widthBig: "317px",
	heightBig: "464px",
};

export const ItemCard = memo(
	({ image, name, sizes, sizeValues, price }): ItemCardType => {
		return (
			<>
				<div className="item-card-wrapper">
					<ImageForPage image={image} configForImage={configForCardCatalogImage} />
					<div className="item-card-text-wrapper">
						<div className="item-card-textbox">
							<VerdanaText text={name} classname="paragraph-card" bold />
							<ItemDescriptionBox sizes={sizes} values={sizeValues} />
						</div>
						<ItemPriceBox price={price} />
					</div>
				</div>
			</>
		);
	}
);

ItemCard.defaultProps = {
	image: "hare",
	name: "Зайчик-попрыгайчик",
	sizes: ["Рост", "вес"],
	sizeValues: ["30 см", "200 г"],
	price: 1200,
};
