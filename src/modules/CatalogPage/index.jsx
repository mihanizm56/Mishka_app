import React from "react";
import { Paragraph } from "../../components";
import { Link } from "react-router-dom";
import { Reostat, FormMultiselect } from "../../components";

export const CatalogPage = ({
	changeMinFilterValue,
	changeMaxFilterValue,
	itemsFilters,
	shopItems,
	changeTypeOfSort,
}) => {
	console.log("MainPage");
	return (
		<div className="catalog-wrapper">
			<Paragraph text="Hello InitPage !" />
			<Reostat
				shopItems={shopItems}
				changeMaxFilterValue={changeMaxFilterValue}
				changeMinFilterValue={changeMinFilterValue}
				minValue={itemsFilters.rangeMin}
				maxValue={itemsFilters.rangeMax}
			/>
			<FormMultiselect nameOfSortType={itemsFilters.selectedFilter} changeTypeOfSort={changeTypeOfSort} />
			<Link to="/hiddenpage">To hidden page</Link>
		</div>
	);
};
