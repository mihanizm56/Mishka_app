import React from "react";
import { Link } from "react-router-dom";
import { Reostat, FormMultiselect, FooterTextLogo } from "../../../components";
import { ItemCard } from "../../Cards";
import "./CatalogPage.css";

export const CatalogPage = ({
	changeMinFilterValue,
	changeMaxFilterValue,
	itemsFilters,
	shopItems,
	changeTypeOfSort,
}) => {
	console.log("CatalogPage");
	console.log(shopItems);
	return (
		<div className="catalog-wrapper">
			<FooterTextLogo text="Hello CatalogPage !" />
			<Reostat
				shopItems={shopItems}
				changeMaxFilterValue={changeMaxFilterValue}
				changeMinFilterValue={changeMinFilterValue}
				minValue={itemsFilters.rangeMin}
				maxValue={itemsFilters.rangeMax}
			/>
			<div className='catalog__shop-items'>
				{shopItems.map(item => {
					return (
						<ItemCard key={item.id} image={item.image} name={item.name} sizes={item.sizes} sizeValues={item.sizeValues} price={item.price} />
					)
				})}
			</div>
			<FormMultiselect nameOfSortType={itemsFilters.selectedFilter} changeTypeOfSort={changeTypeOfSort} />
			<Link to="/hiddenpage">To hidden page</Link>
		</div>
	);
};
