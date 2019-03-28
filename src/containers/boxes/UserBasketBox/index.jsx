import React from "react";
import { SVGForPage, TextForHeaderBasketIcon, VerdanaText } from "../../../components";
import "./UserBasketBox.css";

const getNormalizedItems = value => value;

export const UserBasketBox = ({ numberOfItems }) => {
	return (
		<div className="basket-box-wrapper">
			<div className="basket-box__icon">
				<SVGForPage icon="basket" />
			</div>
			<div className="basket-box__text">
				<VerdanaText text={`Корзина: ${getNormalizedItems(numberOfItems)}`} classname='text-header-basket-icon' bold/>
			</div>
		</div>
	);
};

UserBasketBox.defaultProps = {
	numberOfItems: "пока пуста",
};

