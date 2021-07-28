import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../img/logo.svg";
import Swal from "sweetalert2";
export default class Nav extends Component {
  state = {
    display: "none",
  };

  componentDidMount() {
    const actualPage = window.location.href;
    if (
      actualPage.includes("/welcome") ||
      actualPage.includes("/game") ||
      actualPage.includes("/goodbay")
    ) {
      this.setState({
        display: "block",
      });
    }
  }

  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .catch((error) =>
        Swal.fire({
          toast: true,
          title: "Error",
          icon: "error",
          iconColor: "rgb(125, 42, 232)",
          text: error.message,
          position: "top-end",
          timer: 7000,
          timerProgressBar: true,
          showConfirmButton: false,
        })
      );
  };
  render() {
    console.log(this.state.display);
    const style = {
      display: this.state.display,
    };
    return (
      <React.Fragment>
        <nav>
          <div className="nav container">
            <img className="logo" src={logo} alt="" />
            <Link to="/">
              <button
                className="btn"
                onClick={this.handleSignOut}
                style={style}
              >
                Salir
              </button>
            </Link>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
