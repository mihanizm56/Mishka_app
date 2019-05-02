//
import React, { Component } from "react";
import { isEqual } from "lodash";
import { ItemCard } from "../../cards";
import { getClass, isDividedByThree } from "../../../../utils";
import "./ItemsCatalog.css";

type itemType = {
	image: string,
	name: string,
	sizes: Array<string>,
	sizeValues: Array<string>,
	price: number,
	id: number,
};

type ItemsCatalogType = {
	shopItems: Array<itemType>,
};

//// может и functional component, подумай

export class ItemsCatalog extends Component {
	static defaultProps = {
		shopItems: [],
	};

	render() {
		// console.log("ItemsCatalog props", props);
		const { shopItems } = this.props;
		const length = shopItems.length;
		return (
			<div className={getClass({ initialClass: "catalog__shop-items", center: isDividedByThree(length) })}>
				{shopItems.map(item => {
					return (
						<ItemCard
							key={item.id}
							image={item.image}
							name={item.name}
							sizes={item.sizes}
							sizeValues={item.sizeValues}
							price={item.price}
							id={item.id}
							handleClickOnIconBasket={this.props.addItemToResultBasket}
						/>
					);
				})}
			</div>
		);
	}
}
