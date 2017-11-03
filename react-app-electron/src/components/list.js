import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import axios from 'axios';

import Item from './item';

class List extends Component {
  render() {
    return(
      <div className="List">
        HELLO - LIST
        <Item />
      </div>
    )
  }
}

export default List;
