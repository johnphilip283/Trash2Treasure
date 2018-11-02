import React, { Component } from 'react';

import {Dimensions, Image} from 'react-native';

export default class Map extends Component {
    render() {
        return (
            <Image style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}} source={require('../assets/tables.png')}/>
        );
    }
}