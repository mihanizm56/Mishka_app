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
							<div className="table-row--big">
								<div className="table-row__block-name--big">
									<TextForVideo text={item.name} />
								</div>
								<div className="table-row__block-value--big">
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
