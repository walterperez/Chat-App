import React, { Component } from 'react';
import "./../../style/main.css";

class ChatRoom extends Component {

  constructor(props) {
    super(props);
    this.state={
    };
  }




  render() {
    return (
      <div className="card grey lighten-5">
        <div className="card-content grey-text text-darken-4">
          <span className="card-title black-text text-darken-4">
            {this.props.activeFriend}
          </span>
          <div id="output"></div>
          <div id="actions"></div>
        </div>
        <div className="card-action">
          {/* <input type="text" id="username" placeholder="Username" /> */}
          <input type="text" id="message" placeholder="Message" />
          <button id="send">Send</button>
        </div>
      </div>
    )
  }
}

export default ChatRoom;