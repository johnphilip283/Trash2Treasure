import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from 'components/Style';

class SignIn extends Component {

    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.welcome}
                      onPress={() => Actions.signUp()} >
                    Sign In
                </Text>
            </View>
        );
    }
}

export default SignIn;