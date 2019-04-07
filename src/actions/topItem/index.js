// @flow
import { loadingAppDoneAction, loadingAppAction } from "../loading";
import { getTopItem } from '../../constants'
import { myFetch } from '../../utils/requests'

export const getTopItem = (data) => ({
    type: getTopItem,
    payload: { ...data }
})

export const fetchTopItem = () => dispatch => {
    dispatch(loadingAppAction())
    myFetch('GET', 'localhost:3000/contacts')
        .then(data => dispatch(getShopItems(data)))
        .then(dispatch(loadingAppDoneAction()))
};