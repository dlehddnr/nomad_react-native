import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.View``;

const BgImage = styled.Image``;



const MovieSlide = ({posterPhoto,
    backgroundPhoto,
    title,
    voteAvg,
    overview}) => <Container><BgImage bgPhoto={}/></Container>;

MovieSlide.PropTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  backgroundPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired
};

export default MovieSlide;
