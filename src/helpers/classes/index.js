// @flow

type getClassParametersType = {
	initialClass: string,
	active?: boolean,
	error?: boolean,
	noMarginTop?: boolean,
};

export const getClass = ({
	initialClass,
	active,
	error,
	noMarginTop,
	noOpacityChange,
}: getClassParametersType): string => {
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

	if (noOpacityChange) {
		resultClass += ` ${initialClass}--no-opacity-change`;
	}

	return resultClass;
};

export const getSpecialClassForHeader = ({ initialClass, isIndexPage }: getClassParametersType): string => {
	let resultClass = initialClass;

	if (isIndexPage) {
		resultClass += ` ${initialClass}--index-page`;
	}

	return resultClass;
};
