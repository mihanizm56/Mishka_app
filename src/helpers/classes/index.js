export const getClass = (initialClass, active, error) => {
	let resultClass = initialClass;

	if (error) {
		resultClass += ` ${initialClass}--error`;
	}

	if (active) {
		resultClass += ` ${initialClass}--active`;
	}

	return resultClass;
};
