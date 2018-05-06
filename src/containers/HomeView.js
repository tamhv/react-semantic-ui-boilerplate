import React from 'react';
import {connect} from "react-redux";
import MainLayout from "../components/MainLayout";
import {Container, Header, Segment, Table} from "semantic-ui-react";
import UserActions from "../reducers/UserRedux";

class HomeView extends React.Component {
    componentDidMount() {
        this.props.getUser()
    }

    _render_row = (record) => {
        return (<Table.Row key={record.id}>
            <Table.Cell collapsing>
                {record.id}
            </Table.Cell>
            <Table.Cell>
                {record.name}
            </Table.Cell>
            <Table.Cell>{record.phone}</Table.Cell>
            <Table.Cell>{record.website}</Table.Cell>
        </Table.Row>)
    };

    render() {
        return (
            <MainLayout>
                <Container textAlign={'left'}>
                    <Header>Home</Header>
                    <Segment style={{minHeight:300}} basic loading={this.props.loading}>
                        <Table>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>ID</Table.HeaderCell>
                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                    <Table.HeaderCell>Phone</Table.HeaderCell>
                                    <Table.HeaderCell>Website</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {this.props.users.map((record) => {
                                    return this._render_row(record)
                                })}
                            </Table.Body>
                        </Table>
                    </Segment>
                </Container>
            </MainLayout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.user.users,
        loading: state.user.loading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => dispatch(UserActions.getUser())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
