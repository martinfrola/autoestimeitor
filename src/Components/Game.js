import React, { Component } from "react";
import Nav from "./Nav";
import fixedCircle from "../img/fixed-circle.svg";
import speedyCircle from "../img/speedy-circle.svg";
import "./game.css";
import { gsap } from "gsap";
import ScoreGame from "./ScoreGame";
import ActualScore from "./ActualScore";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const tween = gsap.timeline({ repeat: -1, repeatDelay: 0, yoyo: true });

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.circle = React.createRef();
    this.circleFixed = React.createRef();
  }
  state = {
    visibility: "visible",
    visibilityBtn: "hidden",
    score: 0,
  };

  handleStart = () => {
    tween.from(".circle-2", {
      left: "0",
    });
    tween.to(".circle-2", {
      left: "85%",
      ease: "linear",
      duration: 0.7,
    });
    this.setState({
      visibility: "hidden",
      visibilityBtn: "visible",
    });
  };

  handlePause = () => {
    tween.pause();
    let result = this.circle.current.style.left;
    //Diferent messages for diferent results
    if (result > "40" && result < "45") {
      Swal.fire({
        title: `AH LISTO QUE CRACK!`,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        confirmButtonColor: "rgb(125, 42, 232)",
      });
    } else if (result > "25" && result < "60") {
      Swal.fire({
        title: "Demasiado bien para jugar con la presión de tener tanta facha",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        confirmButtonColor: "rgb(125, 42, 232)",
      });
    } else {
      Swal.fire({
        title:
          "Según las estadisticas a la gente mas besha le va mal en este juego! No te preocupes!",
        showConfirmButton: false,
        timer: 7000,
        timerProgressBar: true,
        confirmButtonColor: "rgb(125, 42, 232)",
      });
    }
    //convert de value into a score number
    let intoNumber = parseInt(result, 10);
    let score = Math.round(((intoNumber * 50) / 42) * 10);
    if (score > 500) {
      let finalScore = 1000 - score;
      this.setState({ score: finalScore });
    } else {
      let finalScore = score;
      this.setState({ score: finalScore });
    }
  };

  handlePlay = () => {
    tween.play();
  };

  render() {
    const style = {
      visibility: this.state.visibility,
    };
    const styleBtn = {
      visibility: this.state.visibilityBtn,
    };
    const score = this.state.score;
    console.log(score);
    return (
      <React.Fragment>
        <Nav />
        <div className="container">
          <button
            onClick={this.handleStart}
            className="start btn"
            style={style}
          >
            Start
          </button>
        </div>
        <div className="game">
          <img
            className="circle circle-2"
            ref={this.circle}
            src={fixedCircle}
            alt="circle 1"
          />
          <img
            className="circle circle-1"
            src={speedyCircle}
            alt="circle 2"
            ref={this.circleFixed}
          />
        </div>
        <div className="comand-btns">
          <button
            className="play btn"
            onClick={this.handlePlay}
            style={styleBtn}
          >
            PLAY
          </button>
          <button
            className="pause btn"
            onClick={this.handlePause}
            style={styleBtn}
          >
            PAUSE
          </button>
        </div>
        <h3 className="text-center">Puntaje: {this.state.score}</h3>
        <div className="continuar">
          <Link to="/message">
            <button className="btn btn-continuar" style={styleBtn}>
              Continuar
            </button>
          </Link>
        </div>

        <ActualScore score={score} />
        <ScoreGame />
      </React.Fragment>
    );
  }
}
