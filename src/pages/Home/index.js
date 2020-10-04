import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import iconHome from '../../assets/IconHome.png'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentView}>
          <View style={styles.imageView}>
            <Image source={iconHome} tintColor='black' />
          </View>
          <View style={styles.textView}>
            <Text style={styles.title}>BrScan</Text>
            <Text style={styles.description}>BioFace</Text>
          </View>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity activeOpacity={.8} style={styles.button} onPress={() => this.props.navigation.navigate('SignIn')}>
            <Text style={styles.buttonText}>INICIAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
