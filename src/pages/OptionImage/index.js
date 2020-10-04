import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import IconTitleButton from './components/IconTitleButton'
import IconBackArrow from '../../assets/IconLeft.png';

import styles from './styles';

export default class TypeDocument extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconView}>
          <TouchableOpacity activeOpacity={.7} style={styles.button} onPress={() => this.props.navigation.goBack()}>
            <Image source={IconBackArrow} />
          </TouchableOpacity>
        </View>
        <View style={styles.textView}>
          <Text style={styles.title}>Escolha uma das</Text>
          <Text style={styles.title}>opções abaixo:</Text>
        </View>
        <View style={styles.buttonView}>
          <IconTitleButton type="STORAGE" title="UPLOAD DO ARQUIVO" />
          <IconTitleButton type="CAMERA" title="CAPTURAR UMA NOVA" press={this.props.navigation} />
        </View>
      </View>
    );
  }
}
