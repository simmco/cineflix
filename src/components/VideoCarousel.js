import React, { Component } from "react";
import Carousel from "nuka-carousel";

import Video from "./Video";
import VideoExtended from "./VideoExtended";

var Decorators = [
  {
    component: React.createClass({
      shouldComponentUpdate(nextProps, nextState) {
        return this.props.currentSlide !== nextProps.currentSlide;
      },
      render() {
        return (
          <div>
            <i
              className="material-icons"
              style={{ fontSize: "60px", cursor: "pointer" }}
              onClick={this.props.previousSlide}
              aria-hidden="true"
            >
              keyboard_arrow_left
            </i>
          </div>
        );
      }
    }),
    position: "CenterLeft",
    style: {
      paddingRight: '20px'
    }
  },
  {
    component: React.createClass({
      shouldComponentUpdate(nextProps, nextState) {
        return this.props.currentSlide !== nextProps.currentSlide;
      },

      render() {
        return (
          <div>
            <i
              className="material-icons"
              style={{ fontSize: "60px", cursor: "pointer" }}
              onClick={this.props.nextSlide}
              aria-hidden="true"
            >
              keyboard_arrow_right
            </i>
          </div>
        );
      }
    }),
    position: "CenterRight",
    style: {
      paddingLeft: '20px'
    }
  }
];

const styles = {
  outside: {
    margin: "0px 0px 3px 0px",
    width: "100%"
  }
};

class VideoCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      extend: "",
      padding: "50px"
    };
  }
  handleOpen = id => {
    this.setState({ extend: id, padding: "20px" });
  };
  handleClose = () => {
    this.setState({ extend: "", padding: "50px" });
  };
  render() {
    const { movies, categorie } = this.props;
    const currentMovie = movies.filter(movie => {
      if (this.state.extend) {
        return movie.id === this.state.extend;
      }
    });
    return (
      <div>
        <h3 style={{margin: 0}}>{categorie}</h3>
        <Carousel
          style={styles.outside}
          className="VideoList"
          slidesToShow={5}
          wrapAround={true}
          framePadding={"30px 0px " + this.state.padding + " 50px"}
          decorators={Decorators}
          frameOverflow="visible"
        >
          {movies &&
            movies.map(movie => (
              <Video key={movie.id} handleExtend={this.handleOpen} {...movie} />
            ))}
        </Carousel>
        {this.state.extend &&
          <VideoExtended id={currentMovie} extend={this.handleClose} />}
      </div>
    );
  }
}

export default VideoCarousel;
