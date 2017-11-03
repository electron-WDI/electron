import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="Item" onClick={() => {this.props.onClickItem(this.props.idItem)}}>
        <div className='titleItem'>{this.props.title}</div>
        <div className='descItem'>{this.props.description}</div>
      </div>
    );
  }
}

export default Item;
