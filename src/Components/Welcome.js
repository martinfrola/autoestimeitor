import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import Nav from "./Nav";
import Foto from "./Foto";

export default class Welcome extends Component {
  state = {
    user: {
      displayName: "",
      photoURL: "",
    },
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    firebase
      .auth()
      .onAuthStateChanged((user) => this.setState({ user, loading: false }));
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        {this.state.loading && <h1 className="loading">Cargando..</h1>}
        {!this.state.loading && (
          <Foto
            nombre={this.state.user.displayName}
            photo={this.state.user.photoURL}
          />
        )}
      </React.Fragment>
    );
  }
}
