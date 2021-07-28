import React, { Component } from "react";
import "./foto.css";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

export default class Foto extends Component {
  state = {
    click: null,
  };
  componentDidMount() {
    gsap.to(".h3", {
      opacity: "1",
      delay: 1,
      duration: 2,
      ease: "expo",
    });
    gsap.from(".btn-game", {
      scale: "0",
      delay: 3,
      duration: 2,
      ease: "elastic",
    });
  }

  handleClick = (e) => {
    const clickNumber = this.state.click + 1;
    this.setState({
      click: clickNumber,
    });
    if (this.state.click < 9) {
      e.preventDefault();
    }
  };

  render() {
    return (
      <div className="photo-start container">
        <h2 className="title">Hola {this.props.nombre}!</h2>

        {this.props.photo && (
          <img className="photo-user" src={this.props.photo} alt="" />
        )}
        {this.props.nombre && (
          <h3 className="h3">
            Ah, no no, pero que besheza de persona acaba de entrar a la
            página!!!
          </h3>
        )}
        {!this.props.nombre && (
          <h3 className="h3">
            Bueno, no tengo tu nombre ni tu foto, pero mi intuición me dice que
            sos una personita hermosa
          </h3>
        )}
        <Link to="/game" onClick={this.handleClick}>
          <button className=" btn btn-game">
            {this.state.click == null
              ? "Golpeame 10 veces para juegar un juego !"
              : this.state.click}
          </button>
        </Link>
      </div>
    );
  }
}
