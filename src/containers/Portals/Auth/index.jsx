import { PureComponent } from "react";
import ReactDOM from "react-dom";
const modalAuth = document.getElementById("modal-auth");

export class ModalAuthPortal extends PureComponent {
	constructor() {
		super();
		this.modalDiv = document.createElement("div");
	}

	componentDidMount() {
		modalAuth.appendChild(this.modalDiv);
	}

	componentWillUnmount() {
		modalAuth.removeChild(this.modalDiv);
	}

	render() {
		return ReactDOM.createPortal(this.props.children, this.modalDiv);
	}
}
