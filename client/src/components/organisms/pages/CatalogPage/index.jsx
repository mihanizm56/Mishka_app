import React, { PureComponent } from "react";
import { ItemsCatalog, VideoBox } from "../../../molecules";
import { ShopItemsProvider } from "../../../../containers";
import "./CatalogPage.css";

export class CatalogPage extends PureComponent {
	render() {
		//console.log("TEST ROUTER MATCH");
		//console.log(window.history);
		console.log("test CatalogPage props", this.props);
		return (
			<div className="catalog-wrapper">
				<ShopItemsProvider component={ItemsCatalog} />
				<VideoBox />
				{/* <Reostat
				shopItems={shopItems}
				changeMaxFilterValue={changeMaxFilterValue}
				changeMinFilterValue={changeMinFilterValue}
				minValue={itemsFilters.rangeMin}
				maxValue={itemsFilters.rangeMax}
			/> */}
				{/* <FormMultiselect nameOfSortType={itemsFilters.selectedFilter} changeTypeOfSort={changeTypeOfSort} /> */}
				{/* <Link to="/hiddenpage">To hidden page</Link> */}
			</div>
		);
	}
}