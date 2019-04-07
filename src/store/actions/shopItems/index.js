// @flow
import { loadingAppDoneAction, loadingAppAction } from "../loading";
import { getShopItems } from '../../constants'
import { myFetch } from '../../utils/requests'

export const getShopItems = (data) => ({
    type: getShopItems,
    payload: { ...data }
})

export const fetchItems = () => dispatch => {
    dispatch(loadingAppAction())
    myFetch('GET', 'localhost:3000/contacts')
        .then(data => dispatch(getShopItems(data)))
        .then(dispatch(loadingAppDoneAction())
};