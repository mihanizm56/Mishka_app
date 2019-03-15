// @flow
import React from "react";
import MediaQuery from "react-responsive";
import { ButtonWithIcon } from "../../../../components";
import "./ButtonIconVideoBox.css";

type ButtonIconVideoBoxType = {
	callback: () => void,
};

export const ButtonIconVideoBox = ({ callback }: ButtonIconVideoBoxType) => {
	return (
		<>
			<MediaQuery minWidth={1201}>
				<ButtonWithIcon icon="video" width="110px" height="82px" />
			</MediaQuery>
			<MediaQuery minWidth={768} maxWidth={1200}>
				<ButtonWithIcon icon="video" width="102px" height="77px" />
			</MediaQuery>
			<MediaQuery minWidth={320} maxWidth={767}>
				<ButtonWithIcon icon="video" width="102px" height="77px" />
			</MediaQuery>
		</>
	);
};

ButtonIconVideoBox.defaultProps = {
	callback: () => console.log("click on ButtonIconVideoBox"),
};
