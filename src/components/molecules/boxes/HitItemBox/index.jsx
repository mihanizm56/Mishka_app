// @flow
import React, { memo } from "react";
import MediaQuery from "react-responsive";
import { OpenSansText } from "../../../../components";
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../../../constants";
import "./HitItemBox.css";

export const HitItemBox = memo(props => {
	const { characteristics } = props;
	// console.log("HitItemBox props");
	// console.log(props);

	return (
		<>
			<MediaQuery minWidth={BIG_MEDIA_SIZE}>
				<div className="table-hit-wrapper--big">
					{characteristics.map((item, index) => {
						return (
							<div className="table-row" key={index}>
								<div className="table-row__block-name">
									<OpenSansText classname="text-video" text={item.name} />
								</div>
								<div className="table-row__block-value">
									<OpenSansText classname="text-video" text={item.value} />
								</div>
							</div>
						);
					})}
				</div>
			</MediaQuery>
			<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
				<div className="table-hit-wrapper--mid">
					{characteristics.map((item, index) => {
						return (
							<div className="table-row" key={index}>
								<div className="table-row__block-name">
									<OpenSansText classname="text-video" text={item.name} />
								</div>
								<div className="table-row__block-value">
									<OpenSansText classname="text-video" text={item.value} />
								</div>
							</div>
						);
					})}
				</div>
			</MediaQuery>
			<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
				<div className="table-hit-wrapper--small">
					{characteristics.map((item, index) => {
						return (
							<div className="table-row" key={index}>
								<div className="table-row__block-name">
									<OpenSansText classname="text-video" text={item.name} />
								</div>
								<div className="table-row__block-value">
									<OpenSansText classname="text-video" text={item.value} />
								</div>
							</div>
						);
					})}
				</div>
			</MediaQuery>
		</>
	);
});

HitItemBox.defaultProps = {
	characteristics: [
		{
			name: "Цвет",
			value: "default-value",
		},
		{
			name: "Диаметр",
			value: "default-value",
		},
		{
			name: "Высота",
			value: "default-value",
		},
	],
};
