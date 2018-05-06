import {put, call} from 'redux-saga/effects'
import UserActions from '../reducers/UserRedux'
import {delay} from "redux-saga";


export function* getUser(api, action) {

    const response = yield call(api.getUser);

    // more delay to see loading indicator
    yield call(delay, 1000);

    if (response.ok) {
        yield put(UserActions.getUserSuccess(response.data))
    } else {
        yield put(UserActions.getUserFail(response.body))
    }

}