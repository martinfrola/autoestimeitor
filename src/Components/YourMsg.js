import React, { Component } from "react";
import { gsap } from "gsap";
import firebase from "firebase";
import "firebase/database";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default class YourMsg extends Component {
  state = {
    msg: "",
  };
  componentWillReceiveProps() {
    if (this.props.visibility === "hidden") {
      gsap.from(".second-card", {
        opacity: 0,
        duration: 1,
        y: -30,
        delay: 3,
        ease: "linear",
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    if (this.state.msg !== "") {
      const db = firebase.database();
      const dbRef = db.ref("messages/");
      dbRef
        .push()
        .set({
          msg: this.state.msg,
        })
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
      //Delete the content of the input after the submit
      const msg = document.getElementById("your-message");
      msg.value = "";
    }
    if (this.state.msg === "") {
      e.preventDefault();
      Swal.fire({
        toast: true,
        title: "Error",
        icon: "error",
        iconColor: "rgb(125, 42, 232)",
        text: "¡No enviaste ningún mensaje!",
        position: "top-end",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };
  render() {
    const style = {
      visibility: this.props.visibility,
    };
    return (
      <div className="container-msg second-card" style={style}>
        <h4>Deja un mensaje para otra persona!</h4>
        <form className="message-form">
          <textarea
            className="random-message "
            name="msg"
            id="your-message"
            onChange={this.handleChange}
          ></textarea>
          <div className="send-msg">
            <Link to="/goodbye" onClick={this.handleSubmit}>
              <button type="submit" className="btn">
                {" "}
                Enviar!
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
