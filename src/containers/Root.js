import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import routes from '../routes';
import App from './App';

export default class Root extends React.Component {

    render() {
        return (
            <Provider store={this.props.store}>
                <App>
                    <ConnectedRouter history={this.props.history}>
                        {routes}
                    </ConnectedRouter>
                </App>
            </Provider>
        );
    }
}