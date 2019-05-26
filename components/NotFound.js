import React from "react";
import styled from "styled-components";
import { RED_COLOR, BG_COLOR } from "../constants/Colors";

const Container = styled.View`
  flex: 1;
  background-color: ${BG_COLOR};
  align-items: center;
`;

const Message = styled.Text`
  color: ${RED_COLOR};
  font-size: 14px;
`;

export default () => (
  <Container>
    <Message>이런! 아무것도 없네요 😅</Message>
  </Container>
);
