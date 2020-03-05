import React from "react";
import styled from "styled-components";

const Form = styled.form`
  position: fixed;
  top: 300px;
  left: 0px;
  width: 40%;
  height: 100%;
  z-index: 30;
  background: white;
`;

const TextField = styled.input`
  width: 100%;
  height: 60%;
  padding: 80px;
  font-size: 3rem;

  &:focus {
    outline: none;
  }
`;

const Button = styled.input`
  background: linear-gradient(-90deg, rgb(220, 90, 50), rgb(196, 74, 103))
    rgb(220, 90, 50);
  width: 100%;
  height: 15%;
  color: white;
  font-size: 3rem;
`;

const CommentForm = () => {
  return (
    <Form>
      <TextField placeholder="testing" />
      <Button type="submit" />
    </Form>
  );
};

export default CommentForm;
