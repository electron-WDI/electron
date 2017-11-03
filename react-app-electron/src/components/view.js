import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import axios from 'axios';

class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contentItem: {}
    }

    this.renderOneView = this.renderOneView.bind(this);
  }

  componentDidMount(){
    axios.get(`${this.props.url}${this.props.itemclickedid}`)
    .then( res => {
      console.log("res in view", res);
    //   this.setState({
    //     contentItem:res
    //   })
    })
  }

  renderOneView() {
    return(
      <div className="OneNote">
        <div className="oneTitle">{this.state.contentItem.title}</div>
        <div className="oneTitle">{this.state.contentItem.description}</div>
      </div>
    )
  }

  render() {
    return (
      <div className="View">
      {/*
        {this.props.mode === "newnote" &&
          <div className="NewNote">
            HELLO VIEW
          </div>
        }

        {this.props.mode === "viewone" &&
          {this.renderOneView()}
        }
      */}
      </div>
    );
  }
}

export default View;
