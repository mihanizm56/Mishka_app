//

type getClassParametersType = {
	initialClass: string,
	active?: boolean,
	error?: boolean,
	noMarginTop?: boolean,
	noOpacityChange?: boolean,
	big?: boolean,
	middle?: boolean,
	small?: boolean,
	bold?: boolean,
	hovered?: boolean,
	ligth?: boolean,
	noBorderBottom?: boolean,
	additionalClass?: boolean,
	noBorder?: boolean,
	noPadding?: boolean,
	withBorderRadius?: boolean,
};

export const getClass = ({
	initialClass,
	active,
	error,
	noMarginTop,
	noOpacityChange,
	big,
	middle,
	small,
	bold,
	hovered,
	ligth,
	noBorderBottom,
	additionalClass,
	noBorder,
	noPadding,
	withBorderRadius,
	customPadding,
	center,
}: getClassParametersType): string => {
	let resultClass = initialClass;

	if (additionalClass) {
		resultClass += ` ${initialClass}--${additionalClass}`;
	}

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

	if (big) {
		resultClass += ` ${initialClass}--big`;
	}

	if (middle) {
		resultClass += ` ${initialClass}--middle`;
	}

	if (small) {
		resultClass += ` ${initialClass}--small`;
	}

	if (bold) {
		resultClass += ` ${initialClass}--bold`;
	}

	if (hovered) {
		resultClass += ` ${initialClass}--hovered`;
	}

	if (ligth) {
		resultClass += ` ${initialClass}--ligth`;
	}

	if (noBorder) {
		resultClass += ` ${initialClass}--no-border`;
	}

	if (noBorderBottom) {
		resultClass += ` ${initialClass}--no-border-bottom`;
	}

	if (noPadding) {
		resultClass += ` ${initialClass}--no-padding`;
	}

	if (customPadding) {
		resultClass += ` ${initialClass}--custom-padding`;
	}

	if (withBorderRadius) {
		resultClass += ` ${initialClass}--with-border-radius`;
	}

	if (center) {
		resultClass += ` ${initialClass}--center`;
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
