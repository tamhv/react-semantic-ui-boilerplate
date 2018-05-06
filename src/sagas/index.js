import {takeLatest, all} from 'redux-saga/effects'
import {UserTypes} from "../reducers/UserRedux";
import {getUser} from "./UserSaga";
import API from '../services/Api'


export const api = API.create('https://jsonplaceholder.typicode.com');

export default function* root() {
    yield all([
        takeLatest(UserTypes.GET_USER, getUser, api),
    ])
}