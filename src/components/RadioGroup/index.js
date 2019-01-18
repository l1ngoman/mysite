import React, { Component } from 'react';
import {radio,images} from '../../styles/Main'
import Radio from './radio'

class SlideShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      options: [],
      index: this.props.options[0]
    }
  }
  render() {
    let {options,index} = this.state;
    let radios = options.map((el,i) => {
      return <Radio 
                index={index} 
                id={i}
                value={el}
                handleChangeParent={this.handleChangeParent} 
                radioValue={this.props.radioValue}
                />
    })
    return (
      <main>
        <div id="radio" style={radio.group2} value={options[index]}>
            {radios}
        </div>
      </main>
    );
  }
  componentDidMount(){
    this.setState({options: this.props.options})
  }
  handleChangeParent = (value) => {
    let {options} = this.state;
    this.props.radioValue(value)
    let newIndex = 0;
    for(let i=0; i<options.length; i++){
      if(value === options[i]){
        newIndex = i;
      }
    }
    this.setState({index: newIndex})
  }
}

export default SlideShow;