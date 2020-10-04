import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import DocIconAcessoCamera from '../../assets/Doc/DocIconAcessoCamera.png';
import DocIconReflexo from '../../assets/Doc/DocIconReflexo.png';
import DocIconLuz from '../../assets/Doc/DocIconLuz.png';

export default class ValidateCamera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen1: true,
      screen2: false,
      screen3: false,
    };
    this.reset = this.reset.bind(this);
    this.showScreen2 = this.showScreen2.bind(this);
    this.showScreen3 = this.showScreen3.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.showScreen2();
    }, 2000);
  }

  showScreen2 = () => {
    this.setState({ screen1: false, screen2: true })

    setTimeout(() => {
      this.showScreen3();
    }, 2000);
  }

  showScreen3 = () => {
    this.setState({ screen2: false, screen3: true })
  }

  reset = () => {
    this.props.navigation.reset({
      routes: [{ name: "Home" }]
    });
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.screen1 && !this.state.screen2 && !this.state.screen3 && (
          <View style={styles.contentViewFull}>
            <View style={styles.imageViewFull}>
              <Image source={DocIconAcessoCamera} />
            </View>
            <View style={styles.textViewFull}>
              <Text style={styles.title}>Processando e enviando a informação.</Text>
            </View>
          </View>
        )}
        { !this.state.screen1 && this.state.screen2 && !this.state.screen3 && (
          <View style={styles.contentViewFull}>
            <View style={styles.imageViewFull}>
              <Image source={DocIconReflexo} />
            </View>
            <View style={styles.textViewFull}>
              <Text style={styles.title}>Em análise.</Text>
              <Text style={styles.description}>Aguarde um instante</Text>
            </View>
          </View>
        )}
        { !this.state.screen1 && !this.state.screen2 && this.state.screen3 && (
          <View style={styles.container}>
            <View style={styles.contentView}>
              <View style={styles.imageView}>
                <Image source={DocIconLuz} />
              </View>
              <View style={styles.textView}>
                <Text style={styles.title}>Pronto!</Text>
                <Text style={styles.description}>Seu documento foi recebido.</Text>
              </View>
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity activeOpacity={.8} style={styles.button} onPress={this.reset}>
                <Text style={styles.buttonText}>FINALIZAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View >
    );
  }
}
