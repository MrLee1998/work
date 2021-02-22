import React, { Component } from 'react';

class EatItem extends Component {
  constructor(props){
    super(props)
    this.handClick = this.handClick.bind(this)
  }

  state = {  }

  handClick() {
    console.log(this.props.index);
    let index = this.props.index
    this.props.deleteItem(index)
  }

  render() { 
    return (  
      <li onClick={this.handClick}>
        {this.props.content}
      </li>
    );
  }
}
 
export default EatItem;