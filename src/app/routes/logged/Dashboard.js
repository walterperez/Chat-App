import React, { Component } from "react";
import ChatRoom from "./ChatRoom";
import FriendsList from "./FriendsList";
import SearchUser from "./SearchUser";

class DashBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      activeFriend: "Rodolfo"
    }
    this.fetchUserFriends = this.fetchUserFriends.bind(this)
    this.changeActiveFriend = this.changeActiveFriend.bind(this)
  }

  changeActiveFriend(newName) {
    this.setState({
      activeFriend: newName
    });
  }

  fetchUserFriends() {
    const UserList = [{ id: "12345", name: "Clintong", online: true }, { id: "12345", name: "Donald", online: true }]
    this.setState({ friends: UserList },
      console.log(this.state.friends)
    )
  }

  componentDidMount() {
    this.fetchUserFriends()
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m4">
            <div className="card-panel grey lighten-5">
              <SearchUser />
              <FriendsList friends={this.state.friends} changeActiveFriend={this.changeActiveFriend} />
            </div>
          </div>

          <div className="col s12 m8">
            <ChatRoom activeFriend={this.state.activeFriend} />
          </div>

        </div>

      </div>
    );
  }
}

export default DashBoard;
