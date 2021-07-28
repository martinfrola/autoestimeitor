import React, { Component } from "react";
import Nav from "./Nav";
import "./message.css";

import RandomMsg from "./RandomMsg";
import YourMsg from "./YourMsg";
export default class Message extends Component {
  state = {
    randomMsgVisibility: "hidden",
    msgVisibility: "hidden",
    requestMsg: "Click aquí!",
    btnVisibility: "visible",
    randomMsg: null,
  };

  handleClick = () => {
    //Pick a random message from the people

    this.setState({
      randomMsgVisibility: "visible",
      msgVisibility: "visible",
      btnVisibility: "hidden",
      requestMsg: "Otro Mensaje",
    });
  };
  render() {
    const style = {
      visibility: this.state.btnVisibility,
    };
    return (
      <React.Fragment>
        <Nav />
        <div className="container text-center message-page">
          <h2>Da click para recibir un mensaje lindo de otra persona!</h2>
          <button
            className="btn btn-msg"
            onClick={this.handleClick}
            style={style}
          >
            {this.state.requestMsg}
          </button>
          <RandomMsg
            msg={this.state.randomMsg}
            visibility={this.state.randomMsgVisibility}
          />
          <YourMsg visibility={this.state.msgVisibility} />
        </div>
      </React.Fragment>
    );
  }
}
