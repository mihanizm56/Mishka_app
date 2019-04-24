//
import React, { memo } from "react";
import MediaQuery from "react-responsive";
import { ImageForPage, SVGIcon, OpenSansText, VerdanaText, LinkComponent } from "../../../../components";
import { HitItemBox } from "..";
import { configForWeeklyHitBoxImage, configForZigzagImage } from "./constants";
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../../../constants";

import { Button } from "../../../atoms/buttons";

import "./WeeklyHitBox.css";

export const WeeklyHitBox = memo(props => {
	const { itemName, image, price, description, ...restProps } = props;
	console.log("check WeeklyHitBox props");
	console.log(props);

	return (
		<div className="hit-box-wrapper">
			<MediaQuery minWidth={BIG_MEDIA_SIZE}>
				<div className="hit-box-main-box">
					<div className="hit-box-title">
						<SVGIcon icon="hit" />
						<VerdanaText text={itemName} classname="main-title" bold />
					</div>
					<div className="hit-box-text-container">
						<div className="hit-box-text-wrapper">
							<OpenSansText classname="text-video" text={description} />
							<HitItemBox {...restProps} />
							<VerdanaText text={`Цена: ${price}`} classname="footer__text-logo" bold />
							{/* <Button classname="button-weekly" text="заказать" /> */}
							{/* <Button classname="button-weekly" text="заказать" /> */}
							<div className="hit-box__button">
								<LinkComponent WrappedComponent={Button} classname="button-weekly" text="заказать" route="orderpage" />
							</div>
						</div>
					</div>
					<ImageForPage image={image} configForImage={configForWeeklyHitBoxImage} />
				</div>
				<div className="zig-zag-container zig-zag-container--big">
					<ImageForPage image="zigzag-index" configForImage={configForZigzagImage} />
				</div>
			</MediaQuery>
			<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
				<div className="hit-box-main-box">
					<div className="hit-box-title">
						<VerdanaText text={itemName} classname="main-title" bold />
						<SVGIcon icon="hit" />
					</div>
					<div className="hit-box-text-container">
						<div className="hit-box-text-wrapper">
							<OpenSansText classname="text-video" text={description} />
							<HitItemBox {...restProps} />
							<VerdanaText text={`Цена: ${price}`} classname="footer__text-logo" bold />
							<Button classname="button-weekly" text="заказать" />
						</div>
						<ImageForPage image={image} configForImage={configForWeeklyHitBoxImage} />
					</div>
				</div>
				<div className="zig-zag-container zig-zag-container--mid">
					<ImageForPage image="zigzag-index" configForImage={configForZigzagImage} />
				</div>
			</MediaQuery>
			<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
				<div className="hit-box-title">
					<VerdanaText text={itemName} classname="main-title" bold />
					<OpenSansText text="Товар недели" classname="green-paragraph-index-small" />
				</div>
				<div className="hit-box-text-wrapper">
					<OpenSansText classname="text-video" text={description} />
					<HitItemBox {...restProps} />
				</div>
				<div className="small-hit-image-wrapper">
					<ImageForPage image={image} configForImage={configForWeeklyHitBoxImage} />
				</div>
				<VerdanaText text={`Цена: ${price}`} classname="footer__text-logo" bold />
				<Button classname="button-weekly" text="заказать" />
				<div className="zig-zag-container zig-zag-container--small">
					<ImageForPage image="zigzag-index" configForImage={configForZigzagImage} />
				</div>
			</MediaQuery>
		</div>
	);
});

WeeklyHitBox.defaultProps = {
	itemName: "Вязаные корзинки",
	image: "index-basket",
	price: "0 рублей",
	description: "Экологически чистая пряжа, ручная работа. Доступны в шести расцветках, и трех размерах.",
};
