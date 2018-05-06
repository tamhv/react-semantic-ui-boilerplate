import React, {Component} from 'react';
import {Container, Menu} from "semantic-ui-react";
import {push} from 'react-router-redux';
import {connect} from "react-redux";

class MainLayout extends Component {
    render() {
        return (
            <div style={{flex: 1}}>
                <Menu style={{flex: 1}} fixed='top'>
                    <Container>
                        <Menu.Item header>
                            Hello world
                        </Menu.Item>
                        <Menu.Item onClick={() => {
                            this.props.dispatch(push('/'))
                        }} as='a'>Home</Menu.Item>
                        <Menu.Item onClick={() => {
                            this.props.dispatch(push('/about'))
                        }} as='a'>About</Menu.Item>
                    </Container>
                </Menu>
                <Container style={{marginTop: 60}}>
                    {this.props.children}
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);

