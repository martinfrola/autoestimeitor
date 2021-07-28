import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "./goodbye.css";
import Swal from "sweetalert2";
export default class Goodbye extends Component {
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
    return (
      <React.Fragment>
        <div className="goodbye">
          <h2>
            Gracias por llegar hasta el final! Desde Autoestimeitor esperamos
            haberte robado una sonrisa!
          </h2>
          <br />
          <h2>Que termines super bien tu día</h2>
        </div>
        <div className="gb-btns">
          <Link to="/welcome">
            <button className="btn">Reiniciar</button>
          </Link>
          <Link to="/">
            <button className="btn" onClick={this.handleSignOut}>
              Salir
            </button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
