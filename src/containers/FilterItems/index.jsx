import React, { Component } from "react";
import { connect } from "react-redux";
import { isEqual } from "lodash";
import { changeSearchFieldAction } from "../../actions";
import { searchStateSelector } from "../../store/selectors";
import { Redirect } from "react-router-dom";

class WrappedContainer extends Component {
	static defaultProps = {
		changeSearch: () => console.log("default changeSearch"),
	};

	// state = {
	// 	isRedirected: false,
	// };

	componentDidMount() {
		// console.log("check FilterItemsProvider props");
		// console.log(this.props);
	}

	// shouldComponentUpdate(nextProps) {
	// 	return !isEqual(this.props, nextProps);
	// }

	redirectToCatalogPage = () => <Redirect to="/catalog" />;

	handleChange = value => {
		const { changeSearch } = this.props;
		// console.log("check 1 ");
		changeSearch(value);
		this.setState({ isRedirected: true });
	};

	render() {
		// console.log("check 2");
		// const { isRedirected } = this.state;
		const { children, searchState, ...restProps } = this.props;
		// return searchState && !isRedirected
		// 	? this.redirectToCatalogPage()
		// 	: React.Children.map(children, child =>
		// 			React.cloneElement(child, { ...restProps, changeSearch: this.handleChange })
		//       );

		return React.Children.map(children, child =>
			React.cloneElement(child, { ...restProps, changeSearch: this.handleChange })
		);
	}
}

const mapStateToProps = store => {
	return {
		searchState: searchStateSelector(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		changeSearch(value) {
			dispatch(changeSearchFieldAction(value));
		},
	};
};

export const FilterItemsProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
