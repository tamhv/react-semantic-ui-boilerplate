import {applyMiddleware, createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {routerMiddleware} from 'react-router-redux';

import reducers from '../reducers';


export default function configureStore(initialState, rootSagas, history) {

    const middleware = [];
    const enhancers = [];

    // add middleware here
    const sagaMiddleware = createSagaMiddleware();
    middleware.push(sagaMiddleware);

    const reduxRouterMiddleware = routerMiddleware(history);
    middleware.push(reduxRouterMiddleware);

    enhancers.push(applyMiddleware(...middleware));

    const store = createStore(reducers, initialState, compose(...enhancers));

    sagaMiddleware.run(rootSagas);

    return store

}