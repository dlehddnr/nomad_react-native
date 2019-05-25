import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TINT_COLOR } from "../constants/Colors";
import MovieItem from "./MovieItem";

const Container = styled.View`
  margin-vertical: 20px;
`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  padding-left: 20px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const ScrollView = styled.ScrollView`
  padding-left: 20px;
`;

const Section = ({ title, children, horizontal = true }) => (
  <Container>
    <Title>{title}</Title>
    <ScrollView horizontal={horizontal}>{children}</ScrollView>
  </Container>
);
Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  horizontal: PropTypes.bool,
  title: PropTypes.string.isRequired
};

export default Section;
