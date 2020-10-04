import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import IconTitleButton from './components/IconTitleButton'
import IconBackArrow from '../../assets/IconLeft.png';

import styles from './styles';

export default class ChooseDocument extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconView}>
          <TouchableOpacity activeOpacity={.7} style={styles.button} onPress={() => this.props.navigation.goBack()}>
            <Image source={IconBackArrow} />
          </TouchableOpacity>
        </View>
        <View style={styles.textView}>
          <Text style={styles.title}>Selecione o tipo de</Text>
          <Text style={styles.title}>documento.</Text>
        </View>
        <View style={styles.buttonView}>
          <IconTitleButton type="RG" title="USAR MEU RG" press={this.props.navigation} />
          <IconTitleButton type="CNH" title="USAR MINHA CNH" press={this.props.navigation} />
        </View>
      </View>
    );
  }
}
