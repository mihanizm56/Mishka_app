// @flow
import React from "react";
import { ItemCard } from "../../cards";
import "./ItemsCatalogContainer.css";

type itemType = {
	image: string,
	name: string,
	sizes: Array<string>,
	sizeValues: Array<string>,
	price: number,
	id: number,
};

type ItemsCatalogContainerType = {
	items: Array<itemType>,
};

export const ItemsCatalogContainer = ({ items }: ItemsCatalogContainerType) => {
	return (
		<div className="catalog__shop-items">
			{items.map(item => {
				return (
					<ItemCard
						key={item.id}
						image={item.image}
						name={item.name}
						sizes={item.sizes}
						sizeValues={item.sizeValues}
						price={item.price}
					/>
				);
			})}
		</div>
	);
};

ItemsCatalogContainer.defaultProps = {
	items: [
		{
			image: "big-basket",
			name: "Большая корзинка для игрушек",
			sizes: ["Диаметр", "высота"],
			sizeValues: ["30 см", "30 см"],
			price: 1500,
			id: 3,
		},
	],
};
