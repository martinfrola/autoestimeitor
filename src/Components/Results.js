import React, { Component } from "react";

export default class Post extends Component {
  render() {
    return (
      <p>
        <strong>{this.props.nombre}</strong>: {this.props.score}
      </p>
    );
  }
}
