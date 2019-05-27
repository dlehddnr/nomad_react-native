import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BG_COLOR } from "../../constants/Colors";
import Layout from "../../constants/Layout";
import MoviePoster from "../../components/MoviePoster";
import makePhotoUrl from "../../utils/makePhotoUrl";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
  flex: 1;
  padding-top: 20px;
`;

const Header = styled.View`
  position: relative;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  padding-horizontal: 30px;
  align-items: center;
  justify-content: space-between;
`;

const BgImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.height / 3};
  opacity: 0.3;
  position: absolute;
`;

const DetailPresenter = (
  id,
  posterPhoto,
  backgroundPhoto,
  title,
  voteAvg,
  overview
) => (
  <Container>
    <Header>
      <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }} />
      <Content>
        <MoviePoster path={posterPhoto} />
      </Content>
    </Header>
  </Container>
);

DetailPresenter.propTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  backgroundPhoto: PropTypes.string,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number,
  overview: PropTypes.string
};

export default DetailPresenter;
