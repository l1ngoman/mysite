import React, { Component } from 'react';
import {radio,images} from '../../styles/Main'
import Radio from './radio'

class SlideShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      pic: [
        "../images/projects/bs1.png",   //0
        "../images/projects/bs2.png",   //1
        "../images/projects/bs3.png",   //2
        "../images/projects/t3_1.png",  //3
        "../images/projects/t3_2.png",  //4
        "../images/projects/t3_3.png",  //5
        "../images/projects/nn_1.png",  //6
        "../images/projects/nn_2.png",  //7
        "../images/projects/nn_3.png",  //8
        "../images/projects/nn_3.png",  //9
        "../images/projects/nn_3.png",  //10
        "../images/projects/ougu_1.png",  //11
        "../images/projects/ougu_2.png",  //12
        "../images/projects/ougu_3.png",  //13
        "../images/projects/ougu_4.png",  //14
        "../images/projects/ougu_5.png",  //15
        "../images/projects/ougu_6.png",  //16
      ],
      index: this.props.picValues[0],
      side: this.props.side
    }
  }
  render() {
    let {pic,index,side} = this.state;
    let radios = this.props.picValues.map((el,i) => {
      return <Radio index={index} value={el} toggleImage={this.toggleImage}/>
    })
    return (
      <main>
         <div style={side === "right" ? images.containerRight : images.containerLeft}>
            <a href={pic[index]}><img style={images.img} src={pic[index]}/></a>
            <div style={radio.group}>
              {radios}
            </div>
          </div>
      </main>
    );
  }
  toggleImage = (newIndex) => {
    this.setState({index: newIndex})
  }
}

export default SlideShow;