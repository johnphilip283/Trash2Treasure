import React, {Component} from 'react';
import {Actions, Router, Scene} from 'react-native-router-flux';
import {StyleSheet, Text, View} from "react-native";

const App = () => {

    return (
        <Router>
            <Scene key = 'root'>
                <Scene  key = 'signIn'
                        component = {SignIn}
                        title = "Sign In">
                        initial
                </Scene>

                <Scene  key = 'signUp'
                        component = {SignUp}
                        title = "Sign Up">
                </Scene>
            </Scene>
        </Router>);

};

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

export default App;