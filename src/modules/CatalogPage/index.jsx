import React from "react";
import { FooterTextLogo } from "../../components";
import { Link } from "react-router-dom";
import { Reostat, FormMultiselect, ImageForCatalog } from "../../components";

export const CatalogPage = ({
	changeMinFilterValue,
	changeMaxFilterValue,
	itemsFilters,
	shopItems,
	changeTypeOfSort,
}) => {
	console.log("CatalogPage");
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
			<ImageForCatalog image="main-logo" />
			<FormMultiselect nameOfSortType={itemsFilters.selectedFilter} changeTypeOfSort={changeTypeOfSort} />
			<Link to="/hiddenpage">To hidden page</Link>
		</div>
	);
};
