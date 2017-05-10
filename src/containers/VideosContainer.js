import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import styled from "styled-components";

import VideoCarousel from "../components/VideoCarousel";

class VideoList extends Component {
  componentWillMount() {
    this.props.fetchMovieNow();
    this.props.fetchMovieYear();
    this.props.fetchMovieHighestRated();
    this.props.fetchMovieMostPopular();
    this.props.fetchMovieMostPopularKids();
  }
  render() {
    const {
      moviesNow,
      moviesYear,
      moviesHighestRated,
      moviesMostPopular,
      moviesMostPopularKids
    } = this.props;
    return (
      <Container>
        <VideoCarousel categorie={"Movies in theatre"} movies={moviesNow} />
        <VideoCarousel
          categorie={"Best Movies this year"}
          movies={moviesYear}
        />
        <VideoCarousel
          categorie={"Highest rated movies"}
          movies={moviesHighestRated}
        />
        <VideoCarousel
          categorie={"Most popular movies"}
          movies={moviesMostPopular}
        />
        <VideoCarousel
          categorie={"Most popular movies for kids"}
          movies={moviesMostPopularKids}
        />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    moviesNow: state.moviesNow,
    moviesYear: state.moviesYear,
    moviesHighestRated: state.moviesHighestRated,
    moviesMostPopular: state.moviesMostPopular,
    moviesMostPopularKids: state.moviesMostPopularKids
  };
}

export default connect(mapStateToProps, actions)(VideoList);


const Container = styled.div`
  padding: 5px 20px;
`
