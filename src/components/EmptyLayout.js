import React, {Component} from 'react';
import {Container, Segment} from "semantic-ui-react";

class EmptyLayout extends Component {
    render() {
        return (
            <Container>
                <Segment style={{flex: 1}}>
                    {this.props.children}
                </Segment>
            </Container>

        )
    }
}

export default EmptyLayout;