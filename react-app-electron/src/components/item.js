import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import axios from 'axios';

class Item extends Component {
  render() {
    return (
      <div className="Item">
        HELLO - ITEM
      </div>
    );
  }
}

export default Item;
