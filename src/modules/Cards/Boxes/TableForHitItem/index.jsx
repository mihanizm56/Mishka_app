// @flow
import React from "react";
import MediaQuery from "react-responsive";
import { TextForVideo } from "../../../../components";

import "./TableForHitItem.css";

export const TableForHitItem = ({ characteristics }) => {
	return (
		<>
			<MediaQuery minWidth={1201}>
				<div className="table-hit-wrapper--big">
					{characteristics.map(item => {
						return (
							<div className="table-row">
								<div className="table-row__block-name">
									<TextForVideo text={item.name} />
								</div>
								<div className="table-row__block-value">
									<TextForVideo text={item.value} />
								</div>
							</div>
						);
					})}
				</div>
			</MediaQuery>
			<MediaQuery minWidth={768} maxWidth={1200}>
				<div className="table-hit-wrapper--mid">
					{characteristics.map(item => {
						return (
							<div className="table-row">
								<div className="table-row__block-name">
									<TextForVideo text={item.name} />
								</div>
								<div className="table-row__block-value">
									<TextForVideo text={item.value} />
								</div>
							</div>
						);
					})}
				</div>
			</MediaQuery>
			<MediaQuery minWidth={320} maxWidth={767}>
				<div className="table-hit-wrapper--small">
					{characteristics.map(item => {
						return (
							<div className="table-row">
								<div className="table-row__block-name">
									<TextForVideo text={item.name} />
								</div>
								<div className="table-row__block-value">
									<TextForVideo text={item.value} />
								</div>
							</div>
						);
					})}
				</div>
			</MediaQuery>
		</>
	);
};

TableForHitItem.defaultProps = {
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
//<MediaQuery minWidth={768} maxWidth={1200}></MediaQuery>
//<MediaQuery minWidth={320} maxWidth={767}></MediaQuery>
