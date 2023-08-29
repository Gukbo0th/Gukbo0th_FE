import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    // TODO : 서버에 로그인 요청
    e.preventDefault();
    if (email === "cotato@gmail.com" && password === "7777") {
      setIsLoggedIn(true);
      console.log("로그인 성공");
    } else {
      console.log("로그인 실패");
    }
  };

  return (
    <Wrapper>
      <h6>로그인</h6>
      {isLoggedIn ? (
        <h3>환영합니다, {email}!</h3>
      ) : (
        <>
          <InputSection onSubmit={onSubmitHandler}>
            <UserInput>
              이메일
              <label>
                <input
                  type="email"
                  placeholder="이메일을 입력해주세요."
                  value={email}
                  onChange={onEmailHandler}
                />
              </label>
            </UserInput>
            <br />
            <UserInput>
              비밀번호
              <label>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  value={password}
                  onChange={onPasswordHandler}
                />
              </label>
            </UserInput>
            <br />
            <button type="submit">로그인</button>
          </InputSection>
          <NoticeSection>
            <p>계정이 없으신가요?</p>
            <Link
              to="/register"
              style={{ color: "black", textDecoration: "none" }}
            >
              회원가입
            </Link>
          </NoticeSection>
        </>
      )}
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  width: 300px;
  height: 400px;
  padding: 40px 30px;
  border-radius: 10px;
  border: 0.5px solid #878787;
  background: #fff;
  box-shadow: 0px 4px 64px 0px rgba(0, 0, 0, 0.05);
  h6 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  h3 {
    margin-top: 10px;
  }
`;

const InputSection = styled.form`
  display: flex;
  flex-direction: column;
  button {
    margin-top: 20px;
    width: 280px;
    height: 45px;
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    margin-bottom: 50px;
  }
`;

const UserInput = styled.div`
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  input {
    margin-top: 5px;
    width: 280px;
    height: 40px;
    border-radius: 5px;
    border-width: 1px;
  }
`;

const NoticeSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 14px;
  gap: 10px;
  p {
    font-size: 11px;
  }
  a {
    font-size: 13.5px;
    font-weight: 600;
  }
`;
