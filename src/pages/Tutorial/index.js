import React, { Component } from 'react';
import Swiper from 'react-native-swiper';

import TutorialComponent from './components/TutorialComponent';

export default class Tutorial extends Component {
  swiperRef = React.createRef()

  swipeRight = () => {
    this.swiperRef.scrollBy(1, true)
  }

  render() {
    return (
      <Swiper
        ref={ref => (this.swiperRef = ref)}
        loop={false}
        showsButtons={false}
        showsPagination={false}
      >
        <TutorialComponent name="local_iluminado" press={this.swipeRight} />
        <TutorialComponent name="retirar_documento" press={this.swipeRight} />
        <TutorialComponent name="fundos_estampados" press={this.swipeRight} />
        <TutorialComponent name="evite_reflexos" press={this.swipeRight} />
        <TutorialComponent name="frente_do_documento" press={this.swipeRight} />
        <TutorialComponent name="verso_do_documento" press={this.props.navigation} last />
      </Swiper>
    )
  }
}
