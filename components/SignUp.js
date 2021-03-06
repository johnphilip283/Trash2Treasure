import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Actions, Router, Scene} from 'react-native-router-flux';
//import styles from "./components/Style";


class SignUp extends Component {

    render() {
        return (
            <View style = {styles.container} >
                <Text style = {styles.welcome}>
                    Sign Up
                </Text>
                <View style = {styles.formContainer}>
                    <SignUpForm/>
                </View>
            </View>
        );
    }
}

class SignUpForm extends Component {
  render() {
    return (
      <View style={styles.container1}>
          <TextInput style={styles.input}
            placeholder="First Name"
            placeholderTextColor = "rgba(0,0,0,.7)"
            />
          <TextInput style={styles.input}
            placeholder="Last Name"
            placeholderTextColor = "rgba(0,0,0,.7)"
            />
          <TextInput style={styles.input}
            placeholder="@husky.neu Email"
            placeholderTextColor = "rgba(0,0,0,.7)"
            />
          <TextInput style={styles.input}
            placeholder="Password"
            placeholderTextColor = "rgba(0,0,0,.7)"
            />
          <TextInput style={styles.input}
            placeholder="Verify Password"
            placeholderTextColor = "rgba(0,0,0,.7)"
            />
          <TouchableOpacity
            style={styles.button}
          >
           <Text> Sign Up </Text>
          </TouchableOpacity>
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
    },
    input: {
        height:40,
        width: 200,
        backgroundColor: "rgba(255,255,255,.2)",
        marginBottom: 20,
        paddingHorizontal: 10
    },
    container1: {
        padding: 20
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginBottom: 10
},
});





export default SignUp;
