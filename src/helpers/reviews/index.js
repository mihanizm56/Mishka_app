export const getUserName = string => {
	return string ? string.split(" ")[0] : "no name";
};

export const getUserSurname = string => {
	return string ? string.split(" ")[1] : "no surname";
};
