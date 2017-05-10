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
      <Wrapper>
        <InnerWrapper>
          <Content>
            {currentSlide === "Overview"
              ? <Overview {...this.props.id[0]} />
              : ""}
            {currentSlide === "More like this" ? <MoreLike /> : ""}
            {currentSlide === "Detail" ? <Detail /> : ""}
          </Content>
          <Picture src={link} />
          <CloseButton onClick={this.props.extend}>X</CloseButton>
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
      flex-direction: column;
      justify-content: center;
      color: white;
      margin-bottom: 2rem;
`;
const InnerWrapper = styled.div`
      display:flex;
`;

const CloseButton = styled.span`
      padding:0 0.8rem;
      text-align: right;
      color: white;
      font-size: 2rem;
      text-shadow: 2px 2px 3px black;
      cursor: pointer;
`;

const Content = styled.div`
  flex: 1;
`;

const Picture = styled.img`
  width: 45%;
  max-height: 100%;
  z-index: -1;
`;
