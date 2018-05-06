import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from "./redux/configureStore";
import rootSagas from './sagas'
import createHistory from 'history/createBrowserHistory';

const initialState = {};
const history = createHistory();

const store = configureStore(initialState,rootSagas,history);

ReactDOM.render(<Root store={store} history={history}/>, document.getElementById('root'));
registerServiceWorker();
