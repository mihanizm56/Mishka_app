import React, { memo } from "react";
import { SVGIcon, VerdanaText } from "../../../../components";
import { DEFAULT_VALUE_BASKET } from "../../../../constants";
import { getNormalizedEndingOfItems } from "../../../../utils";
import "./UserBasketBox.css";

export const UserBasketBox = memo(({ numberOfItems, loginState }) => {
	console.log("UserBasketBox props", numberOfItems);
	return (
		<div className="basket-box-wrapper">
			<div className="basket-box__icon">
				<SVGIcon icon="basket" />
			</div>
			<div className="basket-box__text">
				<VerdanaText
					text={`Корзина: ${numberOfItems && loginState ? numberOfItems : "нет"} товар${
						loginState ? getNormalizedEndingOfItems(numberOfItems) : getNormalizedEndingOfItems(null)
					}`}
					classname="text-header-basket-icon"
					bold
				/>
			</div>
		</div>
	);
});

UserBasketBox.defaultProps = {
	numberOfItems: DEFAULT_VALUE_BASKET,
};
