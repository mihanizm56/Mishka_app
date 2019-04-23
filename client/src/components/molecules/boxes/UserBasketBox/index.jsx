import React, { memo } from "react";
import { SVGIcon, VerdanaText } from "../../../../components";
import "./UserBasketBox.css";

const getNormalizedItems = value => value;

export const UserBasketBox = memo(({ numberOfItems }) => {
	return (
		<div className="basket-box-wrapper">
			<div className="basket-box__icon">
				<SVGIcon icon="basket" />
			</div>
			<div className="basket-box__text">
				<VerdanaText text={`Корзина: ${getNormalizedItems(numberOfItems)}`} classname="text-header-basket-icon" bold />
			</div>
		</div>
	);
});

UserBasketBox.defaultProps = {
	numberOfItems: "пока пуста",
};
