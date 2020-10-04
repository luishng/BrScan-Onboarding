import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import icon from '../../assets/Doc/DocIconFrenteDocumento.png'

export default class TutorialAttention extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentView}>
          <View style={styles.imageView}>
            <Image source={icon} />
          </View>
          <View style={styles.textView}>
            <Text style={styles.title}>Vamos lá!</Text>
            <Text style={styles.description}>Tenha seus documentos em mãos,</Text>
            <Text style={styles.description2}>RG ou CNH</Text>
          </View>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity activeOpacity={.8} style={styles.button} onPress={() => this.props.navigation.navigate('ValidateCamera')}>
            <Text style={styles.buttonText}>AVANÇAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
