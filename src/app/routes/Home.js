import React, { Component } from 'react';
import { withRouter } from "react-router"
import SvgLogo from "./../../public/img/network.svg";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state={};
    this.handleChangeMainButton=this.handleChangeMainButton.bind(this)
  }

  handleChangeMainButton () {
    this.props.history.push("/SignIn");
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 l4 valign-wrappe">
            <h2>Chat Private & Secure</h2>
            <h6>Because Privacity is Right, and must be respected</h6>
            <button className="light-blue darken-4 waves-effect waves-light btn-large"
            onClick={this.handleChangeMainButton}
            >
              <i className="material-icons right">cloud</i>
              Start Now
            </button>
          </div>
          <div className="col s12 l8">
            <SvgLogo style={{ "width": "100%", "height": "auto" }} />
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Home);