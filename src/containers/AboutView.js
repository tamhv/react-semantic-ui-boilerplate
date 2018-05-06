import React from 'react';
import MainLayout from "../components/MainLayout";
import {Segment} from "semantic-ui-react";

export default class AboutView extends React.Component {
    render() {
        return (
            <MainLayout>
                <Segment>About us</Segment>
            </MainLayout>
        );
    }
}
