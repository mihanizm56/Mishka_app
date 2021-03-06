//
import React, { memo } from "react";
import appConfig from "../../../../appConfig.json";

export const FormMultiselect = memo((props: FormMultiselectProps) => {
	const { changeTypeOfSort, nameOfSortType } = props;
	const listOfTypes: Array<string> = appConfig["sortTypes"];
	let _select = React.createRef();

	return (
		<select
			className="select-sort-type"
			value={nameOfSortType !== "" ? nameOfSortType : ""}
			ref={input => (_select = input)}
			onChange={() => changeTypeOfSort(_select.value)}
		>
			<option value="" />
			{listOfTypes.map((element, index) => (
				<option key={index} value={element}>
					{element}
				</option>
			))}
		</select>
	);
});
