import React, { Component } from "react";
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
export default class ActualScore extends Component {
  state = {
    user: {
      displayName: "",
    },
  };
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user: user });
    });
  }

  componentDidUpdate() {
    if (this.props.score !== 0) {
      const db = firebase.database();
      const dbRef = db.ref("users/");
      dbRef.push().set({
        score: this.props.score,
        userName: this.state.user.displayName,
      });
    }
  }

  render() {
    return <div></div>;
  }
}
