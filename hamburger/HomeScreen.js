import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

//library imports
import { Icon, Container, Header, Content, Left } from 'native-base'

class HomeScreen extends Component {

    render() {
        return (

            <Container>
                <Header>
                    <Left>
                        <Icon name = 'ios-menu'
                              onPress = {() => this.props.navigation.openDrawer()}>
                        </Icon>
                    </Left>
                </Header>

                <Content
                    contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                    <Text>Go To Settings Screen</Text>
                </Content>
            </Container>
        );
    }
}

export default HomeScreen;


const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});