import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Reostat, FormMultiselect } from "../../../components";
import { ItemsCatalogContainer, VideoBox } from "../../boxes";
import "./CatalogPage.css";

export class CatalogPage extends Component {
	componentDidMount() {}

	render() {
		const { changeMinFilterValue, changeMaxFilterValue, itemsFilters, shopItems, changeTypeOfSort } = this.props;
		//console.log("TEST ROUTER MATCH");
		//console.log(window.history);
		console.log("test CatalogPage props");
		console.log(this.props);
		return (
			<div className="catalog-wrapper">
				{/* <Reostat
				shopItems={shopItems}
				changeMaxFilterValue={changeMaxFilterValue}
				changeMinFilterValue={changeMinFilterValue}
				minValue={itemsFilters.rangeMin}
				maxValue={itemsFilters.rangeMax}
			/> */}
				<ItemsCatalogContainer items={shopItems} />
				<VideoBox />
				{/* <FormMultiselect nameOfSortType={itemsFilters.selectedFilter} changeTypeOfSort={changeTypeOfSort} /> */}
				{/* <Link to="/hiddenpage">To hidden page</Link> */}
			</div>
		);
	}
}

// export const CatalogPage = ({
// 	changeMinFilterValue,
// 	changeMaxFilterValue,
// 	itemsFilters,
// 	shopItems,
// 	changeTypeOfSort,
// }) => {
// };
