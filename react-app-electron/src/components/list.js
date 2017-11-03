import React, { Component } from 'react';

import axios from 'axios';

import Item from './item';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allItems: []
    }

    this.renderItem = this.renderItem.bind(this)
  }

  componentDidMount() {
    axios.get(`${this.props.dataurl}`)
    .then(res => {
      this.setState({
        allItems: res.data.notes
      })
    })
  }

  renderItem() {
    const allItemsRender = [];
    this.state.allItems.map(e => {
      allItemsRender.push(
        <Item onClickItem={this.props.onClickItem} title={e.title} desc={e.description} idItem={e.id}/>
      )
    })
    return allItemsRender;
  }

  render() {
    return(
      <div className="List">
        {this.renderItem()}
      </div>
    )
  }
}

export default List;
