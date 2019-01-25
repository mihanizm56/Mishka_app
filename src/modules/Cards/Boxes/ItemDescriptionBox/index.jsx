// @flow
import React from "react";
import { TextForItems } from "../../../../components";
import "./ItemDescriptionBox.css";

type ItemDescriptionBoxType = {
    sizes: Array<string>,
    values: Array<string>,
};

export const ItemDescriptionBox = ({sizes, values}: ItemDescriptionBoxType) => {
	return (
		<div className="item-card__description-box">
			<TextForItems text={`${sizes[0]} ${values[0]}, ${sizes[1]} ${values[1]}`}/>
		</div>
	);
};

ItemDescriptionBox.defaultProps = {
    sizes: ['testprop1', 'testprop2'],
    values: ['testvalue1', 'testvalue2']
}