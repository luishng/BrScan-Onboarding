import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import styles from './IconTitleButtonStyles';

import IconRG from '../../../assets/Doc/IconRG.png';
import IconCNH from '../../../assets/Doc/IconCNH.png';

export default class IconTitleButton extends Component {
  constructor(props) {
    super(props);
    this.iconButtonByType = this.iconButtonByType.bind(this);
  }

  iconButtonByType = (name) => {
    switch (name) {
      case 'RG':
        return IconRG
      case 'CNH':
        return IconCNH
      default:
        return IconRG
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={.8}
          style={styles.button}
          onPress={() => this.props.press.navigate('TypeDocument', { type: this.props.type })}
        >
          <Image source={this.iconButtonByType(this.props.type)} />
          <Text style={styles.buttonText}>{this.props.title}</Text>
        </TouchableOpacity>
      </View >
    )
  }
}
