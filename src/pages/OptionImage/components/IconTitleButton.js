import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import styles from './IconTitleButtonStyles';

import DicoIconStorage from '../../../assets/Doc/DicoIconCamera.png';
import DicoIconCamera from '../../../assets/Doc/DicoIconCamera.png';

export default class IconTitleButton extends Component {
  constructor(props) {
    super(props);
    this.iconButtonByName = this.iconButtonByName.bind(this);
  }

  iconButtonByName = (name) => {
    switch (name) {
      case 'STORAGE':
        return DicoIconStorage
      case 'CAMERA':
        return DicoIconCamera
      default:
        return DicoIconStorage
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.press ? this.props.press.navigate('Camera') : {}}
        >
          <Image
            source={this.iconButtonByName(this.props.name)}
            tintColor='red'
          />
          <Text style={styles.buttonText}>{this.props.title}</Text>
        </TouchableOpacity>
      </View >
    )
  }
}
