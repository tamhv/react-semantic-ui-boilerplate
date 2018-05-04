import React, {Component} from 'react';
import './App.css';

import 'semantic-ui-css/semantic.min.css';
import 'font-awesome/css/font-awesome.css';
import {Button, Segment} from "semantic-ui-react";

class App extends Component {
    render() {
        return (
            <Segment padded={'very'}>
                <Button primary>Semantic UI is ready</Button>
                <Button secondary>Semantic UI is ready</Button>
            </Segment>
        );
    }
}

export default App;
