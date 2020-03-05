import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 11;
  background: linear-gradient(-90deg, rgb(220, 90, 50), rgb(196, 74, 103))
    rgb(220, 90, 50);
  color: white;
  padding: 80px;
`;

const Header = () => {
  return (
    <Container>
      <h1>Site Title</h1>
    </Container>
  );
};

export default Header;
