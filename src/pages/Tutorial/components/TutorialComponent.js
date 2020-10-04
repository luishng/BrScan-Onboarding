import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import styles from './TutorialComponentStyles';
import IconBackArrow from '../../../assets/IconLeftDark.png';

import LocalIluminado from '../../../assets/Doc/DocIconLuz.png';
import RetirarDocumento from '../../../assets/Doc/DocIconPlastico.png';
import FundosEstampados from '../../../assets/Doc/DocIconFundoEstampado.png';
import EviteReflexos from '../../../assets/Doc/DocIconReflexo.png';
import FrenteDoDocumento from '../../../assets/Doc/DocInicioIcon.png';
import VersoDoDocumento from '../../../assets/Doc/DocIconTrasDocumento.png';

export default class TutorialComponent extends Component {
  constructor(props) {
    super(props);
    this.iconTutorialByName = this.iconTutorialByName.bind(this);
    this.titleByName = this.titleByName.bind(this);
    this.descriptionByName = this.descriptionByName.bind(this);
    this.descriptionByName2 = this.descriptionByName2.bind(this);
  }

  iconTutorialByName = (name) => {
    switch (name) {
      case 'local_iluminado':
        return LocalIluminado
      case 'retirar_documento':
        return RetirarDocumento
      case 'fundos_estampados':
        return FundosEstampados
      case 'evite_reflexos':
        return EviteReflexos
      case 'frente_do_documento':
        return FrenteDoDocumento
      case 'verso_do_documento':
        return VersoDoDocumento
      default:
        return LocalIluminado
    }
  }

  titleByName = (name) => {
    switch (name) {
      case 'local_iluminado':
        return 'Escolha um local iluminado'
      case 'retirar_documento':
        return 'Retire o documento do plástico'
      case 'fundos_estampados':
        return 'Evite fundos estampados'
      case 'evite_reflexos':
        return 'Evite reflexos no documento'
      case 'frente_do_documento':
        return 'Fotografe a frente do documento'
      case 'verso_do_documento':
        return 'Fotografe o verso do documento'
      default:
        return ''
    }
  }

  descriptionByName = (name) => {
    switch (name) {
      case 'local_iluminado':
        return 'Posicione seu documento em uma'
      case 'retirar_documento':
        return ''
      case 'fundos_estampados':
        return ''
      case 'evite_reflexos':
        return ''
      case 'frente_do_documento':
        return 'Use o lado que possui foto.'
      case 'verso_do_documento':
        return 'Use o lado que não possui foto.'
      default:
        return ''
    }
  }

  descriptionByName2 = (name) => {
    switch (name) {
      case 'local_iluminado':
        return 'superfície lisa e, de preferência, escura.'
      case 'retirar_documento':
        return ''
      case 'fundos_estampados':
        return ''
      case 'evite_reflexos':
        return ''
      case 'frente_do_documento':
        return ''
      case 'verso_do_documento':
        return ''
      default:
        return ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentView}>
          <View style={styles.imageView}>
            <Image source={this.iconTutorialByName(this.props.name)} />
          </View>
          <View style={styles.textView}>

            <Text style={styles.title}>{this.titleByName(this.props.name)}</Text>

            {!!this.descriptionByName(this.props.name) && (
              <Text style={styles.description}>{this.descriptionByName(this.props.name)}</Text>
            )}
            {!!this.descriptionByName2(this.props.name) && (
              <Text style={styles.description2}>{this.descriptionByName2(this.props.name)}</Text>
            )}
          </View>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity activeOpacity={.8} style={styles.button} onPress={() => this.props.last ? this.props.press.navigate('ChooseDocument') : this.props.press()}>
            <Text style={styles.buttonText}>{this.props.last ? 'AVANÇAR' : 'ENTENDI'}</Text>
          </TouchableOpacity>
        </View>
      </View >
    )
  }
}
