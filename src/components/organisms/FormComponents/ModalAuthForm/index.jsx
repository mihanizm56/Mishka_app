import React, { Component } from "react";
import { Field } from "redux-form";
import { FormTextInputField, Button } from "../../../../components";
import "./ModalAuthForm.css";

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
		const { handleSubmit, closeModal } = this.props;

		return (
			<div className="auth-form-layout">
				<div className="auth-form-overlay" onClick={closeModal} />
				<form className="auth-form-wrapper" onSubmit={handleSubmit(this.signInUser)}>
					<div className="auth-form__email">
						<Field
							component={FormTextInputField}
							placeholder="Введите e-mail"
							noBorderBottom
							noMarginTop
							noPadding
							noTitle
							label="мыло"
							type="text"
							name="email"
						/>
					</div>
					<div className="auth-form__password">
						<Field
							component={FormTextInputField}
							noBorderBottom
							noMarginTop
							noPadding
							noTitle
							label="пароль"
							type="password"
							name="password"
							autocompleteOff
							placeholder="Введите пароль"
						/>
					</div>
					<div className="auth-form__button">
						<Button
							buttonType="submit"
							classname="button-auth-modal"
							text="Отправить"
							handleClick={handleSubmit(this.signInUser)}
							autocompleteOff
						/>
					</div>
				</form>
			</div>
		);
	}
}
