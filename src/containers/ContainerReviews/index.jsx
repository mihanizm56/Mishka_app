import React, { Component } from "react";
import { addReview } from '../../../actions'
import { connect } from "react-redux";

class WrappedContainer extends Component {
    render() {
        console.log("test ContainerReviews props");
        console.log(this.props);

        const { component: WrappedComponent, reviews } = this.props;

        return <WrappedComponent reviews={reviews} />
    }
}

const mapStateToProps = store => {
    return { reviews: store.reviews.reviewList };
};

const mapDispatchToProps = dispatch => {
    return {
        addReviewInList(newArray) {
            dispatch(addReview(newArray))
        }
    }
}

export const ContainerReviews = connect(mapStateToProps, mapDispatchToProps)(WrappedContainer);