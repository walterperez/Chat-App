import React, { Component } from "react";
import { withRouter } from "react-router";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleForm = this.handleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleForm(e) {
    e.preventDefault();
    console.log(e.target);
    fetch("/api/user/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.props.handleAuth();
        this.props.history.push("/Dashboard")
      });
  }

  render() {
    return (
      <div>
        <div className="row center-align">
          <div className="col s12 m8 offset-m2 l6 center-align">
            <div className="card light-grey darken-1 hoverable">
              <div className="card-content grey-text">
                <span className="card-title">Login now!</span>
                <div className="card-action">
                  <form onSubmit={this.handleForm}>
                    <div className="row">
                      <div className="col s12 input-field">
                        <input
                          id="email"
                          type="text"
                          name="email"
                          className="validate"
                          onChange={this.handleChange}
                          value={this.state.email}
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col s12 input-field">
                        <input
                          id="password"
                          type="password"
                          name="password"
                          className="validate"
                          onChange={this.handleChange}
                          value={this.state.password}
                        />
                        <label htmlFor="email">Password</label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="light-blue darken-4 waves-effect waves-light btn-large"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
