import React, { Component } from "react";

class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserToSearchInput: "",
      listOfUsersFound:[{name:"John Lennon"},{name:"Richard"}]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.listOfUsersFound = this.listOfUsersFound.bind(this);
  }

  renderlistOfUsersFound () {
    
    const usersFound = this.state.listOfUsersFound;

    const friendList = stateList.map((usersFound, index) =>
        <a key={index} 
        className="collection-item grey-text text-lighter-4"
        onClick={(user)=>this.props.changeActiveFriend(user.name)}
        > {user.name} 
        </a>
    );

    return friendList
  }

  handleSubmit() {
    fetch(`/api/user/search/`, {
      method: "POST",
      body: JSON.stringify({
        name: this.state.UserToSearchInput
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          UserFind: data.name
        });
      })
      .catch(err => console.log(err));
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <nav className="light-blue darken-4">
          <div className="nav-wrapper">
            <form>
              <div className="input-field">
                <input
                  id="search"
                  type="search"
                  name="UserToSearchInput"
                  value={this.state.inputValue}
                  onChange={this.handleChange}
                  required
                />
                <label className="label-icon" htmlFor="search">
                  <i className="material-icons"
                    onClick={this.handleSubmit}>
                    search
                </i>
                </label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
        <div className="grey lighten-5">
          <h6 className="black-text">Friend List:</h6>
          <div className="collection">
            {this.renderlistOfUsersFound()}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchUser;
