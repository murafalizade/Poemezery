import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
export default class Coursels extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: 'uuidv4()',
      content: <img src="https://picsum.photos/800/801/?random"  width='400px' alt="1" />
    },
    {
      key: 'as',
      content: <img src="https://picsum.photos/800/802/?random"  width='400px' alt="2" />
    },
    {
      key: 'asd',
      content: <img src="https://picsum.photos/600/803/?random" width='400px'  alt="3" />
    },
    {
      key:'asdsad',
      content: <img src="https://picsum.photos/800/500/?random" width='400px'  alt="4" />
    },
    {
      key:'asdsdq',
      content: <img src="https://picsum.photos/800/804/?random"  width='400px' alt="5" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ width: "300px", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
        />
       
      </div>
    );
  }
}
