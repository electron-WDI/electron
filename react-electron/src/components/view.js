import React, { Component } from 'react';

import axios from 'axios';

class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contentItem: {}
    }

    this.renderOneView = this.renderOneView.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
  }

  componentDidUpdate(prevProps){
    if (prevProps.itemclickedid !== this.props.itemclickedid) {
      axios.get(`${this.props.dataurl}${this.props.itemclickedid}`)
      .then( res => {
        this.setState({
          contentItem: res.data.notes
        })
      })
    }
  }

  deleteOne() {
    axios.delete(`${this.props.dataurl}${this.props.itemclickedid}`)
    .then(res => {
      {this.props.itemafterdeleted()}
    })
  }

  renderOneView() {
    return(
      <div className="OneNote">
       {this.state.contentItem !== null &&
         <div className="OneNote">
           <div className="oneTitle">{this.state.contentItem.title}</div>
           <div className="oneTitle">{this.state.contentItem.description}</div>
           <button onClick={this.deleteOne}>Delete</button>
         </div>
       }
       </div>
    )
  }

  render() {
    return (
      <div className="View">
        {this.props.mode === "newnote" &&
          <div className="NewNote">
            HELLO VIEW
          </div>
        }

        {this.props.mode === "viewone" &&
          <div className="OneNoteContainer">
            {this.renderOneView()}
          </div>
        }
      </div>
    );
  }
}

export default View;
