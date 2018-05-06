import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

const {Types, Creators} = createActions({
    getUser: null,
    getUserSuccess: ['data'],
    getUserFail: ['error']
}, {prefix: 'USER_'});

export const UserTypes = Types;
export default Creators


export const INITIAL_STATE = Immutable({
    loading: false,
    users: []
});

const getUser = (state) => {
    return state.merge({loading: true})
};

const getUserSuccess = (state, {data}) => {
    return state.merge({loading: false, users: data})
};

const getUserFail = (state, {error}) => {
    return state.merge({errors: error})
};

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_USER]: getUser,
    [Types.GET_USER_SUCCESS]: getUserSuccess,
    [Types.GET_USER_FAIL]: getUserFail,
});