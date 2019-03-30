import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FormTextField } from "../../../../components";
import { Redirect } from "react-router-dom";

class FormAuthComponent extends Component {
	signInUser = ({ email, password }) => {
		const { signInFunc, appToLoad } = this.props; ///////////////переделать и сделать асинхронным
		appToLoad();
		signInFunc(email, password);
	};

	render() {
		const { handleSubmit, login, isLoading } = this.props;

		if (login || localStorage.login === "true") return <Redirect to="/hiddenPage" />;

		return isLoading ? (
			<p>Loading</p>
		) : (
			<>
				<form className="form" onSubmit={handleSubmit(this.signInUser)}>
					<Field component={FormTextField} label="мыло" type="text" name="email" />
					<Field component={FormTextField} label="пароль" type="password" name="password" />
					<button type="submit">Отправить</button>
				</form>
			</>
		);
	}
}

export const FormAuth = reduxForm({
	validate: ({ email, password }) => {
		const errors = {};
		if (!email || email === "") errors.email = "Failed email";
		if (!password || password === "") errors.password = "Failed password";
		return errors;
	},
	form: "auth",
})(FormAuthComponent);
