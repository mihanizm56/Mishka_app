import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Reostat, FormMultiselect, FooterTextLogo } from "../../../components";
import { ItemsCatalogContainer, VideoBox } from "../../boxes";
import { ButtonForOffer } from "../../../components";
import "./CatalogPage.css";

export class CatalogPage extends Component {
	componentDidMount() {
		//console.log("CatalogPage");
		//console.log(this.props);
		//this.props.changePage("CatalogPage");
	}

	render() {
		const { changeMinFilterValue, changeMaxFilterValue, itemsFilters, shopItems, changeTypeOfSort } = this.props;
		//console.log("TEST ROUTER MATCH");
		//console.log(window.history);
		return (
			<div className="catalog-wrapper">
				{/* <FooterTextLogo text="Hello CatalogPage !" /> */}
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
