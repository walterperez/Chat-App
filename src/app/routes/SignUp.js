import React, { Component } from "react";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      repeat_password: ""
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

  async handleForm(e) {
    e.preventDefault();
    console.log(e.target);
    const { name, email, password, repeat_password } = e.target;

    let errors = [];
    //check if any camp is null
    if (name <= 0) {
      errors.push({ type: "Name field is empty" });
    }
    if (email <= 0) {
      errors.push({ type: "Email field is empty" });
    }
    if (password <= 0) {
      errors.push({ type: "Password field is empty" });
    }
    if (repeat_password <= 0) {
      errors.push({ type: "Confirm Password field is empty" });
    }

    //Check if name, and passwords has a min length of 8 letters
    if (name < 8) {
      errors.push({ type: "Name field must contain a minimum of 8 letters" });
    }
    if (password < 8) {
      errors.push({
        type: "Password field must contain a minimum of 8 letters"
      });
    }

    //check if both passwords are the same
    if (password.value !== repeat_password.value) {
      console.log(password.value);
      console.log(repeat_password.value);
      errors.push({ type: "Both Passwords must be the same" });
    }

    //check if name or email is already in use
    // const name_in_use = await User.find({ name: this.name });
    // if (name_in_use.length > 0) {
    //   errors.push({ type: "Ups! User Name is already in use!" });
    // };
    // const email_in_use = await User.find({ name: this.email });
    // if (email_in_use.length > 0) {
    //   errors.push({ type: "Ups! User Email is already in use!" });
    // };

    //Check if errors.array is empty
    if (errors.length > 0) {
      console.log(errors);
    } else {
      //create  new User
      // const user = await User.create({ name, email, password });

      fetch("/api/user/signup", {
        method: "POST",
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          repeat_password: this.state.repeat_password
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });

      if (!user) {
        //if error to connect to db
        console.log("Error can not connect to the db");
      } else {
        //if user was created
        console.log(`New user created: ${user}`);
      }
    }
  }

  render() {
    return (
      <div className="row center-align">
        <div className="col s12 m8 offset-m2 l6 center-align">
          <div className="card light-grey darken-1 hoverable">
            <div className="card-content grey-text">
              <span className="card-title">
                Create your <spam className="blue-text">FREE</spam> account!
              </span>
              <div className="card-action">
                <form onSubmit={this.handleForm}>
                  <div className="col s12 input-field">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="validate"
                      onChange={this.handleChange}
                      value={this.state.name}
                    />
                    <label htmlFor="name">Name</label>
                  </div>

                  <div className="col s12 input-field">
                    <input
                      id="email"
                      type="text"
                      name="email"
                      className="validate"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="email">Email</label>
                  </div>

                  <div className="col s12 input-field">
                    <input
                      id="password"
                      type="password"
                      name="password"
                      className="validate"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="password">Password</label>
                  </div>

                  <div className="col s12 input-field">
                    <input
                      id="repeat_password"
                      type="password"
                      name="repeat_password"
                      className="validate"
                      value={this.state.repeat_password}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="repeat_password">Repeat password</label>
                  </div>

                  <button
                    type="submit"
                    className="light-blue darken-4 waves-effect waves-light btn-large"
                  >
                    Submit
                  </button>

                  <p>
                    <label>
                      <input
                        type="checkbox"
                        checked="defaultChecked"
                        className="fill-in"
                      />
                      <span style={{ marginTop: "10px" }}>
                        I agree with{" "}
                        <spam className="orange-text">
                          Terms and Conditions
                        </spam>{" "}
                        of ChatApp
                      </span>
                    </label>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
