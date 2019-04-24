//
import React from "react";
import { isEqual } from "lodash";
import { ItemCard } from "../../cards";
import { getClass } from "../../../../utils";
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

const testFunc = (array, searchValue) => {
	return array
		.map(item => JSON.stringify(item))
		.filter(item => isMatching(item, searchValue))
		.map(item => JSON.parse(item));
};

const isMatching = (full, chunk) => {
	return full.toUpperCase().indexOf(chunk.toUpperCase()) > -1;
};

const getShopItems = (initialItems, filter) => {
	const result = filter && initialItems.length ? testFunc(initialItems, filter) : initialItems;
	console.log("result", result);
	return result;
};

export const ItemsCatalog = (props: ItemsCatalogType) => {
	console.log("ItemsCatalog props", props);
	const { shopItems, searchState } = props;
	const filteredItems = getShopItems(shopItems, searchState);
	return (
		<div className={getClass({ initialClass: "catalog__shop-items", center: !isEqual(shopItems, filteredItems) })}>
			{filteredItems.map(item => {
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
	shopItems: [],
};
