import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import axios from 'axios';

import Item from './item';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allItems: {}
    }

    this.renderItem = this.renderItem.bind(this)
  }

  componentDidMount() {
    axios.get(`${this.props.url}`)
    .then(res => {
      console.log("res in list", res);
      // this.setState({
      //   allItems: res
      // })
    })
  }

  renderItem() {
    // const allItems = [];
    // this.state.allItems.map(e => {
    //   allItems.push(
    //     <Item onClickItem={this.props.onClickItem} title={e.title} desc={e.description} idItem={e.id}/>
    //   )
    // })
    // return allItems;
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
