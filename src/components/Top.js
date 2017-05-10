import React, { Component } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

class TopArea extends Component {
  render() {
    const movie = this.props.moviesNow[0]
    movie && console.log(movie.backdrop_path)
    return (
      <div className="top-picture">
          { movie && <Image src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} /> }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    moviesNow: state.moviesNow
  };
}

export default connect(mapStateToProps)(TopArea);

const Image = styled.img`
  max-height: 100%;
  margin: 0 auto;
`
