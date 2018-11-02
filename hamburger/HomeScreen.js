import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { Icon, Container, Header, Content, Left } from 'native-base'

export default class HomeScreen extends Component {

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name = 'ios-menu'
                              onPress = {() => this.props.navigation.openDrawer()}
                                style={styles.menu}>
                        </Icon>
                    </Left>
                </Header>

                <Content
                    contentContainerStyle={styles.container}>
                    <Text>Go To Settings Screen</Text>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    menu: {
        paddingHorizontal: 5,
        paddingVertical: 5
    }
});