import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../style/Style';

export default class SignUp extends Component {

    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.welcome}>
                    Sign Up
                </Text>
            </View>
        );
    }
}
