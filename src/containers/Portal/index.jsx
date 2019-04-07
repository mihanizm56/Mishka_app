import { PureComponent } from "react";
import ReactDOM from "react-dom";
const modalRoot = document.getElementById("modal");

export class Portal extends PureComponent {
	constructor() {
		super();
		this.modalDiv = document.createElement("div");
	}

	componentDidMount() {
		modalRoot.appendChild(this.modalDiv);
	}

	componentWillUnmount() {
		modalRoot.removeChild(this.modalDiv);
	}

	render() {
		return ReactDOM.createPortal(this.props.children, this.modalDiv);
	}
}
