import React from "react";
import styled from "styled-components";
import img from "../assets/login_img.svg";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <Wrapper>
      <Login />
      <img src={img} />
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 60px 240px;
  margin-left: 60px;
  column-gap: 40px;
  img {
    width: 60%;
  }
`;
