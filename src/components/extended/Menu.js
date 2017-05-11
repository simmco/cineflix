import React, { Component } from "react";

let styles = {
  container: {
    display: "flex",
    marginTop: "-1.7rem",
    justifyContent: "center",
    zIndex: 20000,
    textShadow: "1px 1px 2px black",
    paddingLeft: "1.6rem"
  },
  menuButton: {
    paddingRight: "1rem",
    color: "white",
    fontSize: "22px",
    textDecoration: "none"
  },
  menuButtonClicked: {
    marginRight: "1rem",
    color: "white",
    textDecoration: "none",
    fontSize: "22px",
    borderBottom: "2px solid red",
    paddingBottom: "2px"
  }
};

class Menu extends Component {
  state = {
    clicked: "Overview"
  };
  handleClick = e => {
    console.log(e.target);
    e.preventDefault();
    this.setState({
      clicked: e.target.innerHTML
    });
    this.props.currentSlide(e.target.innerHTML);
  };
  render() {
    const { clicked } = this.state;
    return (
      <div style={styles.container}>
        <a
          href=""
          style={
            clicked === "Overview"
              ? styles.menuButtonClicked
              : styles.menuButton
          }
          onClick={this.handleClick}
        >
          Overview
        </a>
        <a
          href=""
          style={
            clicked === "Detail" ? styles.menuButtonClicked : styles.menuButton
          }
          onClick={this.handleClick}
        >
          Detail
        </a>
        <a
          href=""
          style={
            clicked === "More like this"
              ? styles.menuButtonClicked
              : styles.menuButton
          }
          onClick={this.handleClick}
        >
          More like this
        </a>
      </div>
    );
  }
}

export default Menu;
