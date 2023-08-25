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
  padding: 10px 120px;
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
  margin-top: 10px;
  margin-right: 50px;
`;

const NavItem = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #000;
  position: relative;
  overflow: hidden;
  & + & {
    margin-left: 40px;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #666666;
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 100%;
  }
`;
