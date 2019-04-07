import React, { Component } from "react";
import { Field } from "redux-form";
import { FormTextInputField, Button, SVGIcon } from "../../../../components";
import "./ModalAuthForm.css";

export class ModalAuthForm extends Component {
	static defaultProps = {
		signInFunc: () => console.log("default signInUser"),
	};

	signInUser = ({ email, password, name }) => {
		const { signInFunc } = this.props; ///////////////переделать и сделать асинхронным
		signInFunc(email, password, name);
	};

	componentDidMount() {
		console.log("ModalAuthForm props");
		console.log(this.props);
	}

	loadingLayout = () => (
		<div className="loading-icon">
			<SVGIcon icon="loading" />
		</div>
	);

	successLayout = () => (
		<div className="success-icon">
			<SVGIcon icon="success" />
		</div>
	);

	normalLayout = () => (
		<>
			<div className="auth-form__name">
				<Field
					component={FormTextInputField}
					placeholder="Введите ваше Имя"
					noBorderBottom
					noMarginTop
					noPadding
					noTitle
					label="имя"
					type="text"
					name="name"
				/>
			</div>
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
					text="Войти"
					// handleClick={this.handleSubmit(this.signInUser)}
					autocompleteOff
				/>
			</div>
		</>
	);

	getFormLayout = ({ isLoading, loginState }) => {
		if (isLoading) return this.loadingLayout();
		else if (loginState) return this.successLayout();
		else return this.normalLayout();
	};

	render() {
		const { handleSubmit, closeModal, isLoading, loginStateApp } = this.props;

		return (
			<div className="auth-form-layout">
				<div className="auth-form-overlay" onClick={closeModal} />
				<form className="auth-form-wrapper" onSubmit={handleSubmit(this.signInUser)}>
					{this.getFormLayout({ isLoading: isLoading, loginState: loginStateApp })}
				</form>
			</div>
		);
	}
}
