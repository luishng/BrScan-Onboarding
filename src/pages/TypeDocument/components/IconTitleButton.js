import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import styles from './IconTitleButtonStyles';

import IconRGFrente from '../../../assets/Doc/IconRGFrente.png';
import IconRGVerso from '../../../assets/Doc/IconRGVerso.png';
import IconRGFrenteVerso from '../../../assets/Doc/IconRGFrenteVerso.png';
import IconCNHFrente from '../../../assets/Doc/IconCNHFrente.png';
import IconCNHVerso from '../../../assets/Doc/IconCNHVerso.png';
import IconCNHFrenteVerso from '../../../assets/Doc/IconCNHFrenteVerso.png';

export default class IconTitleButton extends Component {
  constructor(props) {
    super(props);
    this.iconButtonByType = this.iconButtonByType.bind(this);
  }

  iconButtonByType = (name) => {
    switch (name) {
      case 'FRENTE_RG':
        return IconRGFrente
      case 'VERSO_RG':
        return IconRGVerso
      case 'FRENTE_E_VERSO_RG':
        return IconRGFrenteVerso
      case 'FRENTE_CNH':
        return IconCNHFrente
      case 'VERSO_CNH':
        return IconCNHVerso
      case 'FRENTE_E_VERSO_CNH':
        return IconCNHFrenteVerso
      default:
        return IconRGFrente
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={.8}
          style={styles.button}
          onPress={() => this.props.press.navigate('OptionImage')}
        >
          <Image source={this.iconButtonByType(this.props.type)} />
          <Text style={styles.buttonText}>{this.props.title}</Text>
        </TouchableOpacity>
      </View >
    )
  }
}
