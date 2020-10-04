import React, { Component } from 'react';
import { View, Text, PermissionsAndroid, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './styles';
import DocIconAcessoCamera from '../../assets/Doc/DocIconAcessoCamera.png';

export default class ValidateCamera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
    cameraOK = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);

    if (cameraOK) {
      this.props.navigation.navigate('Tutorial');
    } else {
      this.setState({ isLoading: false })
    }
  }

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Permissão para acessar sua câmera",
          message: "Você permite que tenhamos acesso a sua câmera?",
          buttonNegative: "Cancelar",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.props.navigation.navigate('Tutorial');
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {!!this.state.isLoading ? (
          <ActivityIndicator />
        ) : (
            <View style={styles.container}>
              <View style={styles.contentView}>
                <View style={styles.imageView}>
                  <Image source={DocIconAcessoCamera} />
                </View>
                <View style={styles.textView}>
                  <Text style={styles.title}>Você precisa liberar o acesso à câmera para fotografar os documentos.</Text>
                </View>
              </View>
              <View style={styles.buttonView}>
                <TouchableOpacity activeOpacity={.8} style={styles.button} onPress={this.requestCameraPermission}>
                  <Text style={styles.buttonText}>AUTORIZAR</Text>
                </TouchableOpacity>
              </View>
            </View >
          )}
      </View >
    );
  }
}
