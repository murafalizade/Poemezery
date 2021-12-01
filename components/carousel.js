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
      content: <Image src="https://dogtrainingobedienceschool.com/pic/2286825_full-jaroslav-seifert-quotes-time-joyce-sutphen-cool-words-nature-quotes-nature-poem.jpg"  width='400px' alt="2" />
    },
    {
      key: 'uuidv4()',
      content: <Image src="https://static.poetryfoundation.org/jstor/i20604849/pages/27.png"  width='400px' alt="1" />
    },
    {
      key: 'asd',
      content: <Image src="https://static.poetryfoundation.org/jstor/i20604990/pages/5.png" width='400px'  alt="3" />
    },
    {
      key:'asdsad',
      content: <Image src="https://static.poetryfoundation.org/jstor/i20596657/pages/15.png" width='400px'  alt="4" />
    },{
      key:'asdad',
      content: <Image src='https://dogtrainingobedienceschool.com/pic/7171158_full-cousin-quotes-from-tumblr-quotes-poem-danal-bjgmc-tb-org.jpg' width='400px' alt='5' />
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
      <div style={{ width: "300px", height: "500px", margin: "-55px auto" }}>
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
