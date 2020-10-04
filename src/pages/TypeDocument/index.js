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
          <Text style={styles.title}>Escolha como quer enviar {
            this.props.route.params.type === 'RG' ? ' o seu RG.' : ' a sua CNH.'
          }</Text>
        </View>
        {this.props.route.params.type === 'RG' ? (
          <View style={styles.buttonView}>
            <IconTitleButton type="FRENTE_RG" title="FOTO DA FRENTE" press={this.props.navigation} />
            <IconTitleButton type="VERSO_RG" title="FOTO DO VERSO" press={this.props.navigation} />
            <IconTitleButton type="FRENTE_E_VERSO_RG" title="FRENTE E VERSO" press={this.props.navigation} />
          </View>
        ) : (
            <View style={styles.buttonView}>
              <IconTitleButton type="FRENTE_CNH" title="FOTO DA FRENTE" press={this.props.navigation} />
              <IconTitleButton type="VERSO_CNH" title="FOTO DO VERSO" press={this.props.navigation} />
              <IconTitleButton type="FRENTE_E_VERSO_CNH" title="FRENTE E VERSO" press={this.props.navigation} />
            </View>
          )}
      </View>
    );
  }
}
