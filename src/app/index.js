import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Materialize
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

//Importing Routes
//No Logged
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
//Logged
import Dashboard from "./routes/logged/Dashboard";
import Profile from "./routes/logged/Profile";
import Options from "./routes/logged/Options";
import LogOut from "./routes/logged/LogOut";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: false
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    fetch("/api/user/logout", {
      method: "GET",
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
      });

    this.setState({
      isLogged: false
    });
  }

  handleAuth() {
    this.setState({
      isLogged: !this.state.isLogged
    });
  }

  render() {
    const isLogged = this.state.isLogged;
    return (
      <div className="App">
        {this.state.isLogged ? (
          <div className="green lighten-5 all-height">
            <Navigation isLogged={isLogged} />
            <div className="container">
              <Route exact path="/Dashboard" component={Dashboard} />
              <Route path="/Profile" component={Profile} />
              <Route path="/Options" component={Options} />
              <Route path="/LogOut" component={LogOut} />
            </div>
          </div>
        ) : (
          <div className="green lighten-5 all-height">
            <Navigation isLogged={isLogged} />
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />
              <Route
                path="/SignIn"
                render={props => (
                  <SignIn isLogged={isLogged} handleAuth={this.handleAuth} />
                )}
              />
              <Route path="/SignUp" component={SignUp} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
