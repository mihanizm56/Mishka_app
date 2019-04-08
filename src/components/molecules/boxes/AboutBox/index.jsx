//
import React, { memo } from "react";
import { VerdanaText } from "../../../../components";
import { IndexItemBox } from "../";
import "./AboutBox.css";

export const AboutBox = memo(({ iconsInBox }) => {
	return (
		<div className="about-box-wrapper">
			<div className="about-box__title">
				<VerdanaText text="Коротко о нас:" classname="main-title" bold />
			</div>
			<div className="about-box__item-box">
				{iconsInBox.map(item => {
					return <IndexItemBox text={item.text} key={item.id} icon={item.icon} />;
				})}
			</div>
		</div>
	);
});

AboutBox.defaultProps = {
	iconsInBox: [
		{
			icon: "flower",
			id: 1,
			text: "Экологически чистые материалы",
		},
		{
			icon: "ball",
			id: 2,
			text: "Скандинавский стиль по российской цене",
		},
		{
			icon: "style",
			id: 3,
			text: "Увеличивает лайки на фотографиях",
		},
		{
			icon: "rocket",
			id: 4,
			text: "Связано вручную с любовью и умилением",
		},
		{
			icon: "heart",
			id: 5,
			text: "Поддержка отечественного производителя",
		},
		{
			icon: "gift",
			id: 6,
			text: "Поставляется в подарочной упаковке",
		},
	],
};
