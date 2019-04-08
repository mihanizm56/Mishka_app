//
import React, { memo } from "react";
import { OpenSansText } from "../../../../components";

type ItemDescriptionBoxType = {
	sizes: Array<string>,
	values: Array<string>,
};

export const ItemDescriptionBox = memo(({ sizes, values }: ItemDescriptionBoxType) => {
	return (
		<div className="item-card__description-box">
			<OpenSansText classname="text-card" text={`${sizes[0]} ${values[0]}, ${sizes[1]} ${values[1]}`} />
		</div>
	);
});

ItemDescriptionBox.defaultProps = {
	sizes: ["testprop1", "testprop2"],
	values: ["testvalue1", "testvalue2"],
};
