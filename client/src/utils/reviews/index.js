export const getUserName = string => {
	console.log("check getUserName", string);
	return string ? string.split(" ")[0] : "";
};

export const getUserSurname = string => (string ? string.split(" ")[1] : "");
