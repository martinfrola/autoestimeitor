import React, { Component } from "react";
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import Results from "./Results";
import "./scores.css";

export default class ScoreGame extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const db = firebase.database();
    const dbRef = db.ref("users/");
    dbRef.on("value", (snapshot) => {
      if (snapshot.val()) {
        //First convert the object into an array and then put it in reverse
        this.setState({
          data: Object.values(snapshot.val()).reverse(),
        });
      }
    });
  }

  render() {
    return (
      <div className="container-scores">
        <h2 className="scores-title">Resultados históricos</h2>
        {this.state.data.map((user, i) => {
          return <Results key={i} nombre={user.userName} score={user.score} />;
        })}
      </div>
    );
  }
}
