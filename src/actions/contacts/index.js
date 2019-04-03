// @flow
import { loadingAppDoneAction, loadingAppAction } from "../loading";
import { getContacts } from '../../constants'
import { myFetch } from '../../utils/requests'

export const getContacts = (data) => ({
    type: getContacts,
    payload: { ...data }
})

export const fetchContacts = () => dispatch => {
    dispatch(loadingAppAction())
    myFetch('GET', 'localhost:3000/contacts')
        .then(data => dispatch(getContacts(data)))
        .then(dispatch(loadingAppDoneAction())
};