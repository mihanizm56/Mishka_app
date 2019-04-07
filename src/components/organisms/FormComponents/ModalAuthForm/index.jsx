import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FormTextInputField, Button } from "../../../../components";
import "./ModalAuthForm.css";

import { loginRequestAction } from "../../../../actions";
import { connect } from "react-redux";

export class ModalAuthForm extends Component {
	static defaultProps = {
		signInFunc: () => console.log("default signInUser"),
	};

	signInUser = ({ email, password }) => {
		const { signInFunc } = this.props; ///////////////переделать и сделать асинхронным
		signInFunc(email, password);
	};

	componentDidMount() {
		console.log("ModalAuthForm props");
		console.log(this.props);
	}

	render() {
		const { handleSubmit } = this.props;

		// if (login || localStorage.login === "true") return <Redirect to="/hiddenPage" />;

		return (
			<div className="auth-form-overlay">
				<form className="auth-form-wrapper" onSubmit={handleSubmit(this.signInUser)}>
					<Field component={FormTextInputField} noBorderBottom noTitle label="мыло" type="text" name="email" />
					<Field component={FormTextInputField} noBorderBottom noTitle label="пароль" type="password" name="password" />
					<Button
						buttonType="submit"
						classname="button-send"
						text="Отправить"
						handleClick={handleSubmit(this.signInUser)}
					/>
				</form>
			</div>
		);
	}
}

// export const ModalAuthFormContainer = reduxForm({
// 	validate: ({ email, password }) => {
// 		const errors = {};
// 		if (!email || email === "") errors.email = "Failed email";
// 		if (!password || password === "") errors.password = "Failed password";
// 		return errors;
// 	},
// 	form: "auth",
// })(ModalAuthFormComponent);

// const mapDispatchToProps = dispatch => {
// 	return {
// 		signInFunc(email, password) {
// 			dispatch(loginRequestAction(email, password));
// 		},
// 	};
// };

// export const ModalAuthForm = connect(
// 	null,
// 	mapDispatchToProps
// )(ModalAuthFormContainer);
