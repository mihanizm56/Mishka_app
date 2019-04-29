import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { isEqual } from "lodash";
import { changeSearchFieldAction } from "../../redux/modules";
import { searchStateSelector } from "../../redux/modules";

class WrappedContainer extends Component {
	static defaultProps = {
		changeSearch: () => console.log("default changeSearch"),
	};

	componentDidUpdate() {
		console.log("check FilterItemsProvider props", this.props);
	}

	handleChange = value => {
		const { changeSearch, redirectToCatalogPage, pagePathName } = this.props;
		console.log("handleChange value", value);
		changeSearch(value);
		if (pagePathName !== "/catalog" && value) {
			redirectToCatalogPage();
		}
	};

	render() {
		const { children, searchState, ...restProps } = this.props;
		return React.Children.map(children, child =>
			React.cloneElement(child, {
				...restProps,
				changeSearch: this.handleChange,
			})
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
		redirectToCatalogPage() {
			dispatch(push("/catalog"));
		},
	};
};

export const FilterItemsProvider = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedContainer);
