import { PureComponent } from "react";
import ReactDOM from "react-dom";
const modalReview = document.getElementById("modal-review");

export class ModalReviewPortal extends PureComponent {
	constructor() {
		super();
		this.modalDiv = document.createElement("div");
	}

	componentDidMount() {
		modalReview.appendChild(this.modalDiv);
	}

	componentWillUnmount() {
		modalReview.removeChild(this.modalDiv);
	}

	render() {
		return ReactDOM.createPortal(this.props.children, this.modalDiv);
	}
}
