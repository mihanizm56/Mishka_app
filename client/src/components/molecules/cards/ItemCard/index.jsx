import React, { PureComponent } from "react";
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

export class ItemCard extends PureComponent {
	static defaultProps = {
		image: "hare",
		name: "Зайчик-попрыгайчик",
		sizes: ["Рост", "вес"],
		sizeValues: ["30 см", "200 г"],
		price: 1200,
	};

	handleItem = () => {
		const { id, handleClickOnIconBasket } = this.props;
		handleClickOnIconBasket(id);

		// {
		// 	image: "hare",
		// 	name: "Зайчик-попрыгайчик",
		// 	sizes: ["Рост", "вес"],
		// 	sizeValues: ["30 см", "200 г"],
		// 	price: 1200,
		// 	id: 1,
		// },
	};

	render() {
		const { image, name, sizes, sizeValues, price, id } = this.props;
		return (
			<>
				<div className="item-card-wrapper">
					<ImageForPage image={image} configForImage={configForCardCatalogImage} />
					<div className="item-card-text-wrapper">
						<div className="item-card-textbox">
							<VerdanaText text={name} classname="paragraph-card" bold />
							<ItemDescriptionBox sizes={sizes} values={sizeValues} />
						</div>
						<ItemPriceBox price={price} handleClick={this.handleItem} />
					</div>
				</div>
			</>
		);
	}
}
