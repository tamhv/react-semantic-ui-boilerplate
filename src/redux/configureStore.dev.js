import {applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers';
import Reactotron from 'reactotron-react-js'
import {api} from '../sagas'
import '../config/Reactotron'

api.addMonitor(Reactotron.apisauce);

export default function configureStore(initialState, rootSagas, history) {

    const middleware = [];
    const enhancers = [];

    // add middleware here
    const sagaMonitor = Reactotron.createSagaMonitor();
    const sagaMiddleware = createSagaMiddleware({sagaMonitor});
    middleware.push(sagaMiddleware);

    const reduxRouterMiddleware = routerMiddleware(history);
    middleware.push(reduxRouterMiddleware);

    enhancers.push(applyMiddleware(...middleware));

    const store = Reactotron.createStore(reducers, initialState, compose(...enhancers));

    sagaMiddleware.run(rootSagas);

    return store

}