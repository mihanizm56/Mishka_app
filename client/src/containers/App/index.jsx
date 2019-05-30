import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerApp } from '../../services';
import { MainWrapper } from '../../components/organisms';
// import { loginStateSelector } from "../../redux/modules/loginReducer";
import { modalAuthStateSelector } from '../../redux/modules/modalAuth';
import { modalStateSelector } from '../../redux/modules/reviews';
// import { searchStateSelector } from "../../redux/modules/itemsFilters";
import { loadingSelector } from '../../redux/modules/appLoading';
import { sendingRequestStateSelector } from '../../redux/modules/reviews';
import './App.css';
import '../../styles/keyframes/keyframes.css';

class AppContainer extends Component {
    componentDidMount() {
        registerApp();
        console.log('app registered in firebase');
    }

    componentDidUpdate() {
        // console.log("app updated");
        // console.log(this.props);
    }

    render() {
        const { loginState, ...restProps } = this.props;
        return (
            <div className="global-wrapper">
                <MainWrapper {...restProps} />
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        router: store.router,
        appLoading: loadingSelector(store),
        modalAuthIsOpen: modalAuthStateSelector(store),
        modalReviewIsOpen: modalStateSelector(store),
        sendingLoading: sendingRequestStateSelector(store)
    };
};

export const App = connect(mapStateToProps)(AppContainer);
