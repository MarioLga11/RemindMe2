import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import HomeStyles from './HomeStyles.js';

export default class Home extends Component<Props> {

  goToHome(){

    this.props.navigation.navigate('Task');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={ require('./../../img/remindMe-lLogo.png')}></Image>
        <TouchableOpacity style={styles.button} onPress={this.goToHome.bind(this)} >
          <Text style={styles.buttonText}>COMENZAR</Text>
        </TouchableOpacity>
        <Image source={ require('./../../img/avatars.png')}><Image>
      </View>
    );
  }
}
