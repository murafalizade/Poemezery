import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import Image from 'next/image'
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
      key: 'as',
      content: <Image src="/image1.jpg" height='350px'  width='200px' alt="2" />
    },
    {
      key: 'uuidv4()',
      content: <Image src="/image2.png" width='200px' height='350px' alt="1" />
    },
    {
      key: 'asd',
      content: <Image src="/image3.png" width='200px' height='350px'  alt="3" />
    },
    {
      key: 'asdsad',
      content: <Image src="/image4.png" width='200px' height='350px' alt="4" />
    }, {
      key: 'asdad',
      content: <Image src='/image5.jpg' width='200px'  height='350px' alt='5' />
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
      <div style={{ width: "400px", height: "450px", margin: "-55px auto" }}>
        <Carousel
          withLoop={true}
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
        />

      </div>
    );
  }
}
