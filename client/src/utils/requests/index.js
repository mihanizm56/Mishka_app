export const sleep = () => {
	return new Promise(res =>
		setTimeout(() => {
			console.log("sleep done");
			res();
		}, 2000)
	);
};
