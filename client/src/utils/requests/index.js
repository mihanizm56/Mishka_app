//
export const myFetch = (type: string, url: string, headers?: any) => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(type, url);

		// if(headers) {
		//     xhr.setRequestHeader(headers);
		// }

		xhr.send();
		if (xhr.status === 200) {
			resolve(xhr.response);
		} else if (xhr.status > 200 && xhr.status < 499) {
			reject(`xhr request have failed, status = ${xhr.status}`);
		} else {
			reject(`server have failed, status = ${xhr.status}`);
		}
	});
};

export const sleep = () => {
	return new Promise(res =>
		setTimeout(() => {
			console.log("sleep done");
			res();
		}, 2000)
	);
};
