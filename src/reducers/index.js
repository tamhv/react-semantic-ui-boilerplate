import {combineReducers} from 'redux';

export default combineReducers({
    user: require('../reducers/UserRedux').reducer,
});
