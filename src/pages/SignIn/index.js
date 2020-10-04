import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

import styles from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cpf: '',
      validateCPF: '',
    };
    this.navigateToTutorial = this.navigateToTutorial.bind(this);
  }

  navigateToTutorial = () => {
    const cpfIsValid = this.cpfField.isValid()
    this.setState({ validateCPF: '' })

    if (cpfIsValid) {
      this.props.navigation.navigate('TutorialAttention');
    } else {
      this.setState({ validateCPF: 'CPF inválido!' })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentView}>
          <View style={styles.imageView}>
            <Text style={styles.title}>Para começar, preencha as informações abaixo.</Text>
          </View>
          <View style={styles.textView}>
            <TextInputMask
              style={styles.cpf}
              placeholder='CPF'
              placeholderTextColor="#000"
              type={'cpf'}
              value={this.state.cpf}
              onChangeText={text => {
                this.setState({
                  cpf: text
                })
              }}
              ref={(ref) => this.cpfField = ref}
            />
            <Text style={styles.bottomText2}>{this.state.validateCPF}</Text>
          </View>
        </View>
        <View style={styles.buttonView}>
          <View style={styles.bottomTextView}>
            <Text style={styles.bottomText}>Ao continuar você estará de acordo com a nossa</Text>
            <Text style={styles.bottomText2}>Política de Privacidade</Text>
          </View>
          <TouchableOpacity activeOpacity={.8} style={styles.button} onPress={this.navigateToTutorial}>
            <Text style={styles.buttonText}>AVANÇAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
