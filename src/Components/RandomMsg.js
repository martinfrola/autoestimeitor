import React, { Component } from "react";
import heart from "../img/heart.svg";
import { gsap } from "gsap";
import firebase from "firebase";
import "firebase/database";
export default class RandomMsg extends Component {
  state = {
    msg: null,
  };
  componentWillReceiveProps() {
    if (this.props.visibility === "hidden") {
      gsap.from(".first-card", {
        scale: "0",
        duration: 2,
        ease: "elastic",
      });
    }
  }
  componentDidMount() {
    console.log("se monto");
    const db = firebase.database();
    const dbRef = db.ref("messages/");
    dbRef.on("value", (snapshot) => {
      const messages = Object.values(snapshot.val());
      //The next function pick a random value between 0 and 1, then multiply for de number of messages, and then round the number. Thas the number of the object into the array that the app
      let message = messages[Math.floor(Math.random() * messages.length)];
      this.setState({
        msg: message.msg,
      });
    });
  }

  render() {
    const style = {
      visibility: this.props.visibility,
    };
    return (
      <div className="container-msg first-card" style={style}>
        <div className="msg-title">
          <h4>Mensaje para ti </h4>
          <img src={heart} alt="" />
        </div>
        <div className="random-message">
          <h5>{this.state.msg}</h5>
        </div>
      </div>
    );
  }
}
