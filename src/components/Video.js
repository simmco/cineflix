import React, { Component } from "react";
import styled from "styled-components";

class Video extends Component {
  state = {
    hover: false,
    extend: false
  };
  mouseOver = () => {
    this.setState({ hover: true });
  };
  mouseOut = () => {
    this.setState({ hover: false });
  };
  handleExtend = () => {
    console.log("clicked");
    this.props.handleExtend(this.props.id);
  };
  render() {
    const imgSrc = `https://image.tmdb.org/t/p/w300${this.props.backdrop_path}`;
    return (
      <VideoContainer onClick={this.handleExtend}>
        <VideoImage
          onMouseOver={this.mouseOver}
          onMouseLeave={this.mouseOut}
          src={imgSrc}
        />
        {this.state.hover
          ? <VideoTitleHover className="my-video-title">
              {this.props.original_title}
            </VideoTitleHover>
          : <VideoTitle className="my-video-title">
              {this.props.original_title}
            </VideoTitle>}
        {/*{this.state.hover &&
          <ButtonExtend className="material-icons">
            keyboard_arrow_down
          </ButtonExtend>}*/}
        {/*<div style={stylePic} onMouseOver={this.mouseOver} onMouseLeave={this.mouseOut}>
          <div style={{flex: 1, paddingLeft: '5%', paddingTop: '2%', textShadow: '1px 2px #333', fontSize: '1.2rem'}}>{this.props.original_title}</div>
          {this.state.hover && <i style={this.styles.bottom} className="material-icons" onClick={this.handleExtend}>keyboard_arrow_down</i>}
      </div>*/}
      </VideoContainer>
    );
  }
}

export default Video;

const VideoContainer = styled.div`
      height: 170px;
      width: 300px;
      position: relative;

      &:hover {
        cursor: pointer;
      }
`;

const VideoImage = styled.img`
      z-index: 10;
      height: 80%;
      width: 80%;
      transition: all 0.1s;
      position: absolute;
      left: 0;
      top: 0;

      &:hover {
        height: 100%;
        width: 100%;
        margin: -1rem 1.2rem 1rem -1.2rem;
        transition: all 0.2s;
        border: 1px solid white;
      }
`;

const VideoTitle = styled.div`
   position: absolute;
   top: 5px;
   left: 5px;
   text-shadow: 1px 2px #333; 
   font-size: 1.2rem; 
   z-index: 10000;
   max-width: 80%;
`;

const VideoTitleHover = styled.div`
   position: absolute;
   top: -14px;
   left: -14px;
   text-shadow: 1px 2px #333; 
   font-size: 1.2rem; 
   z-index: 10000;
   max-width: 100%;
`;

const ButtonExtend = styled.i`
        cursor: pointer;
        font-size: 40px;
        position: absolute;
        left: 110px;
        top: 120px;
        z-index: 1000;
      }
`;
