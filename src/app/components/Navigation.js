import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
    const isLogged = props.isLogged;
    if (isLogged) {
        return (
            <div>
                <nav className="light-blue darken-4">
                    <div className="container">
                        <div className="nav-wrapper">
                            <a href="/" className="brand-logo">ChatUp!</a>
                            <a href="#" data-target="mobile-demo"
                                className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className="right hide-on-med-and-down">
                                <li>
                                    <Link to="/Dashboard">Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/Profile">Profile</Link>
                                </li>
                                <li>
                                    <Link to="/Options">Options</Link>
                                </li>
                                <li>
                                    <Link to="/LogOut">Log Out</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><Link to="/Dashboard">Dashboard</Link></li>
                    <li><Link to="/Profile">Profile</Link></li>
                    <li><Link to="/Options">Options</Link></li>
                    <li><Link to="/LogOut">Log Out</Link></li>
                </ul>
            </div>
        )
    }
    else {
        return (
            <div>
                <nav className="light-blue darken-4">
                    <div className="container">
                        <div className="nav-wrapper">
                            <a href="/" className="brand-logo">ChatUp!</a>
                            <a href="#" data-target="mobile-demo"
                                className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className="right hide-on-med-and-down">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/About">About</Link>
                                </li>
                                <li>
                                    <Link to="/SignIn">SignIn</Link>
                                </li>
                                <li>
                                    <Link to="/SignUp">SignUp</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/SignIn">SignIn</Link></li>
                    <li><Link to="/SignUp">SignUp</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navigation;

