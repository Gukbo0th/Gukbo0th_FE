import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/gukbo.jpg";

const NavBar = () => {
  return (
    <Wrapper>
      <img
        src={logo}
        alt="logo"
        onClick={() => window.location.replace("/")}
        style={{ cursor: "pointer" }}
      />
      <NavSection>
        <NavItem to="/funding">국보펀딩</NavItem>
        <NavItem to="/mypage">마이페이지</NavItem>
        <NavItem to="/login">로그인/회원가입</NavItem>
      </NavSection>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 120px;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid #ebebeb;
  img {
    width: 80px;
  }
`;

const NavSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: fit-content;
  margin-top: 4px;
  margin-right: 50px;
`;

const NavItem = styled(Link)`
  font-size: 1.56rem;
  font-weight: bold;
  text-decoration: none;
  color: #000;
  position: relative;
  overflow: hidden;
  opacity: 0.3;
  & + & {
    margin-left: 48px;
  }
  &::before {
    content: "";
    transform: translateX(-50%);
    transition: width 1s ease;
  }
  &:hover::before {
    width: 100%;
  }
  &:hover {
    opacity: 1;
  }
`;
