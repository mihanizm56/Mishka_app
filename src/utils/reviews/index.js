export const getUserName = string => {
	return string ? string.split(" ")[0] : "no name";
};

export const getUserSurname = string => {
	console.log('test parser surname', string ? string.split(" ")[1] : "")
	return string ? string.split(" ")[1] : "";
};
