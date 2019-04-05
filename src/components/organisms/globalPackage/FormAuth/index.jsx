import React, { Component } from "react";
import { connect } from "react-redux";
import { loginRequestAction } from "../../../../actions";
import { reduxForm, Field } from "redux-form";
import { FormTextField, Button, FormTextInputField } from "../../../../components";
import { Redirect } from "react-router-dom";
import './FormAuth.css'

class FormAuthComponent extends Component {
	signInUser = ({ email, password }) => {
		const { signIn } = this.props; ///////////////переделать и сделать асинхронным
		signIn(email, password);
	};

	componentDidMount() {
		console.log("Form Auth props");
		console.log(this.props);
	}

	render() {
		const { handleSubmit } = this.props;

		// if (login || localStorage.login === "true") return <Redirect to="/hiddenPage" />;

		return (
			<>
				<div className='auth-modal-wrapper'>
					<form className="auth-modal__form" onSubmit={handleSubmit(this.signInUser)}>
						<Field component={FormTextInputField} noTitle noBorderBottom label="мыло" type="text" name="email" />
						<Field component={FormTextInputField} noTitle noBorderBottom label="пароль" type="password" name="password" />
						<Button classname="button-send" text="отправить заказ" />
					</form>
				</div>
			</>
		);
	}
}

export const FormProvider = reduxForm({
	validate: ({ email, password }) => {
		const errors = {};
		if (!email || email === "") errors.email = "Failed email";
		if (!password || password === "") errors.password = "Failed password";
		return errors;
	},
	form: "auth",
})(FormAuthComponent);


const mapDispatchToProps = dispatch => {
	return {
		signIn(emailValue, passwordValue) {
			dispatch(loginRequestAction(emailValue, passwordValue));
		},
	};
};


export const FormAuth = connect(null,mapDispatchToProps)(FormProvider);