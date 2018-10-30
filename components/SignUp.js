import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from 'components/Style';

class SignUp extends Component {

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


export default SignUp;