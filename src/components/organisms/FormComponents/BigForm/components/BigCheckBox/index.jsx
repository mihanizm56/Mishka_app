//
import { React } from "react";
import { Field } from "redux-form";
import { CheckBox } from "../../../../";

export const getBigCheckBoxContainer = () => (
	<>
		<div className="buttons-big-first-column">
			<Field component={CheckBox} type="checkbox" name="first_checkbox" text="Белый" />
			<Field component={CheckBox} type="checkbox" name="first_checkbox" text="«Тиффани»" />
		</div>
		<div className="buttons-big-second-column">
			<Field component={CheckBox} type="checkbox" name="first_checkbox" text="Розовый" />
			<Field component={CheckBox} type="checkbox" name="first_checkbox" text="Серый" />
		</div>
		<div className="buttons-big-third-column">
			<Field component={CheckBox} type="checkbox" name="first_checkbox" text="Черный" />
			<Field component={CheckBox} type="checkbox" name="first_checkbox" text="Оранжевый" />
		</div>
	</>
);
