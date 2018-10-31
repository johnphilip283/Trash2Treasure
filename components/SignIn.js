import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../style/Style';
import { Actions} from 'react-native-router-flux';

export default class SignIn extends Component {

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
