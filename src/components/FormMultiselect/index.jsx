import React from "react";
import appConfig from "../../appConfig.json";

export const FormMultiselect = ({ changeTypeOfSort, nameOfSortType }) => {
	const listOfTypes = appConfig["sortTypes"];
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
};
