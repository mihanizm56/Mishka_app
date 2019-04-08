//
import React from "react";
import { ItemCard } from "../../cards";
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

export const ItemsCatalog = (props: ItemsCatalogType) => {
	console.log("ItemsCatalog props");
	console.log(props);
	const { shopItems } = props;
	return (
		<div className="catalog__shop-items">
			{shopItems.map(item => {
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

ItemsCatalog.defaultProps = {
	shopItems: [
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
