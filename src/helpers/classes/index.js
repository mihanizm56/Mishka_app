// @flow

type getClassParametersType = {
	initialClass: string,
	active?: boolean,
	error?: boolean,
	noMarginTop?: boolean,
};

export const getClass = ({ initialClass, active, error, noMarginTop }: getClassParametersType): string => {
	let resultClass = initialClass;

	if (error) {
		resultClass += ` ${initialClass}--error`;
	}

	if (active) {
		resultClass += ` ${initialClass}--active`;
	}

	if (noMarginTop) {
		resultClass += ` ${initialClass}--no-margin-top`;
	}

	return resultClass;
};
