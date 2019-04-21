import React, { Component } from "react";
import OnlineIconSVG from "./../../components/OnlineIconSVG";


class FriendsList extends Component {

  constructor (props) {
    super(props);
    this.state = {
      friends:[]
    }
  }


  renderFriendList () {

    const stateList = this.props.friends;

    const friendList = stateList.map((userFriend, index) =>
        <a key={index} 
        className="collection-item grey-text text-lighter-4"
        onClick={(name)=>this.props.changeActiveFriend(userFriend.name)}
        > {userFriend.online ?
          <OnlineIconSVG/>
          : null}
          {" " + userFriend.name} 
        </a>
    );

    return friendList
  }

  render() {
    return (
      <div className="grey lighten-5">
        <h6 className="black-text">Friend List:</h6>
        <div className="collection">
            {this.renderFriendList()}
        </div>
      </div>
    );
  }
}

export default FriendsList;
