import React, { Component } from "react";
import styled from "styled-components";

import Menu from "./extended/Menu";
import Overview from "./extended/Overview";
import Episodes from "./extended/Episodes";
import Detail from "./extended/Detail";
import MoreLike from "./extended/MoreLike";

class VideoExtended extends Component {
  state = {
    currentSlide: "Overview"
  };
  handleSlideClick = v => {
    console.log(v);
    this.setState({ currentSlide: v });
  };
  render() {
    const { currentSlide } = this.state;
    const link = `https://image.tmdb.org/t/p/w780${this.props.id[0].backdrop_path}`;
    console.log(this.props.id[0]);
    return (
      <Wrapper picture={this.props.id[0].backdrop_path}>
        <CloseButton onClick={this.props.extend}>X</CloseButton>
        <InnerWrapper>
          <Content>
          {currentSlide === "Overview"
            ? <Overview {...this.props.id[0]} />
            : ""}
          {currentSlide === "More like this" ? <MoreLike /> : ""}
          {currentSlide === "Detail" ? <Detail /> : ""}
          </Content>
          <Picture src={link} />
        </InnerWrapper>
        <Menu currentSlide={this.handleSlideClick} />
      </Wrapper>
    );
  }
}

export default VideoExtended;

const Wrapper = styled.div`
      width: 100%;
      height: 450px;
      display: flex;
      flexDirection: column;
      justifyContent: center;
      color: white;
`;
const InnerWrapper = styled.div`
      display:flex;
`;

const CloseButton = styled.span`
      align-self: flex-end;
      color: white;
      fontSize: 2rem;
      textShadow: 2px 2px 3px black;
      cursor: pointer;
`;

const Content = styled.div`
  flex: 1;
`

const Picture = styled.img`
  max-width: 50%;
  height: 90%;
  z-index: 0;
`;
