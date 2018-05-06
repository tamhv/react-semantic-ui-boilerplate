import React, {Component} from 'react';
import '../styles/App.css';

import 'semantic-ui-css/semantic.min.css';
import 'font-awesome/css/font-awesome.css';

import {connect} from 'react-redux';

class App extends Component {
    render() {
        return (
            <div className='App'>
                {this.props.children}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

