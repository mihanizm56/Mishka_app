import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { IndexPage } from "../../containers";

//// здесь обвязка с редаксом

const RoutePage = ({ ...restProps }) => <Route {...restProps} render={() => <IndexPage />} />;

// const mapStateToProps = store => {
// 	return { reviews: store.reviews }; ////// нужна абстрактная сущность ListReviewsBox
// };

// export const IndexPageRoute = connect(mapStateToProps)(RoutePage);
