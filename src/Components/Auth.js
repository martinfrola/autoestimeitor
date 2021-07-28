import React, { Component } from "react";
import "./auth.css";
import facebook from "../img/facebook.svg";
import google from "../img/google.svg";
import firebase from "firebase/app";
import "firebase/auth";
import Nav from "./Nav";
import { gsap } from "gsap";
import Swal from "sweetalert2";

export default class Auth extends Component {
  state = {
    user: {},
    email: "",
    psw: "",
  };

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
      if (this.state.user) {
        this.props.history.push("/welcome");
      }
    });
  }

  componentDidMount() {
    const tl = gsap.timeline();
    tl.from("#a", { y: 30, opacity: 0, duration: 0.2, ease: "back" });
    tl.from("#b", { y: 30, opacity: 0, duration: 0.2, ease: "back" });
    tl.from("#c", { y: 30, opacity: 0, duration: 0.2, ease: "back" });
    tl.from("#d", { y: 30, opacity: 0, duration: 0.2, ease: "back" });
    tl.from("#e", { y: 30, opacity: 0, duration: 0.2, ease: "back" });
    tl.from("#f", { y: 30, opacity: 0, duration: 0.2, ease: "back" });
    tl.from("#g", { y: 30, opacity: 0, duration: 0.2, ease: "back" });
    tl.from("#h", { y: 30, opacity: 0, duration: 0.2, ease: "back" });
    tl.from("#i", { y: 30, opacity: 0, duration: 0.2, ease: "back" });
    tl.from("#j", { y: 30, opacity: 0, duration: 0.2, ease: "back" });
    tl.from("#k", { y: 30, opacity: 0, duration: 0.2, ease: "back" });
    tl.from("#l", { y: 30, opacity: 0, duration: 0.2, ease: "back" });
    tl.from("#m", { y: 30, opacity: 0, duration: 0.2, ease: "back" });
    tl.from("#n", { y: 30, opacity: 0, duration: 0.2, ease: "back" });
  }
  loginGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        this.setState({
          user: result.user,
        });
        this.props.history.push("/welcome");
      })
      .catch((error) => {
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
        });
      });
  };

  loginFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        this.setState({
          user: result.user,
        });
        this.props.history.push("/welcome");
      })
      .catch((error) => {
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
        });
      });
  };

  crateAcount = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.psw)
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

  loginMail = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.psw)
      .catch((error) => {
        if (!error) {
          this.props.history.push("/welcome");
        } else {
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
          });
        }
      })
      .then(() => {});
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="autoestimeitor">
          <h1 id="a">A</h1>
          <h1 id="b">U</h1>
          <h1 id="c">T</h1>
          <h1 id="d">O</h1>
          <h1 id="e">E</h1>
          <h1 id="f">S</h1>
          <h1 id="g">T</h1>
          <h1 id="h">I</h1>
          <h1 id="i">M</h1>
          <h1 id="j">E</h1>
          <h1 id="k">I</h1>
          <h1 id="l">T</h1>
          <h1 id="m">O</h1>
          <h1 id="n">R</h1>
        </div>
        <div className="container-login container">
          <div className="buttons">
            <div className="login-btn" onClick={this.loginFacebook}>
              <img src={facebook} alt="" />
              <p>Iniciá sesión con Facebook</p>
            </div>
            <div className="login-btn" onClick={this.loginGoogle}>
              <img src={google} alt="" />
              <p>Iniciá sesión con Google</p>
            </div>

            <h3>Ingresá con tu email</h3>
            <form className="login-email">
              <input
                type="email"
                name="email"
                placeholder="Tu Email"
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="psw"
                placeholder="Tu Contraseña"
                onChange={this.handleChange}
              />
            </form>
            <div className="btns">
              <button className="btn" onClick={this.crateAcount}>
                {" "}
                Crear Cuenta
              </button>
              <button className="btn" onClick={this.loginMail}>
                {" "}
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
