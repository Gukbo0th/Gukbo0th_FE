import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../assets/money.svg";
import axios from "axios";

const MyPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchTotalPrice();
  }, []);

  const fetchTotalPrice = () => {
    // axios
    //   .get("http://3.34.35.95:8080/members/myPage?email=test@n.com")
    //   .then((response) => {
    //     setTotal(response.data);
    //     console.log();
    //   });
  };

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    // TODO : 서버에 로그인 요청
    e.preventDefault();
    if (email === "user@example.com" && password === "password") {
      setIsLoggedIn(true);
      console.log("로그인 성공");
    } else {
      console.log("로그인 실패");
    }
  };
  return (
    <>
      <Wrapper>
        <Header>
          <h3>나의 정보</h3>
        </Header>
        {isLoggedIn ? (
          <h3>환영합니다, {email}!</h3>
        ) : (
          <>
            <Container>
              <InputSection onSubmit={onSubmitHandler}>
                <UserInput>
                  이름
                  <label>
                    <input
                      type="email"
                      placeholder="김감자"
                      value={email}
                      onChange={onEmailHandler}
                    />
                  </label>
                </UserInput>
                <br />
                <UserInput>
                  이메일
                  <label>
                    <input
                      type="password"
                      placeholder="cotato@gmail.com"
                      value={password}
                      onChange={onPasswordHandler}
                    />
                  </label>
                </UserInput>
                <br />
              </InputSection>
              <Bottom>
                <h3>나의 펀딩</h3>
              </Bottom>
              <BottomBox>
                <img src={img} />
                <h3>펀딩 총 금액 : </h3>{" "}
                <label>
                  <input type="money" placeholder="320,000원"></input>
                </label>
              </BottomBox>
            </Container>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default MyPage;

const Wrapper = styled.div`
  padding: 0px;
`;

const Header = styled.div`
  margin-top: 325px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  font-family: Poppins;
  h3 {
    font-size: 48px;
    margin-left: 130px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
const Container = styled.div`
  margin-left: 5rem;
  margin-top: 1rem;
  border-radius: 90px;
  background: #f5f5f5;
  width: 1418px;
  height: 221px;
  flex-shrink: 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const InputSection = styled.form`
  display: flex;
  flex-direction: column;
`;

const UserInput = styled.div`
  margin-left: 5rem;
  margin-top: 1rem;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  input {
    margin-top: 5px;
    width: 423px;
    height: 42.326px;
  }
`;

const Bottom = styled.div`
  margin-top: 300px;
  display: flex;
  flex-direction: row;
  font-family: Poppins;
  h3 {
    font-size: 48px;
    margin-left: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const BottomBox = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-items: center;
  border-radius: 90px;
  background: #f5f5f5;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  input {
    margin-top: 5px;
    width: 423px;
    height: 42.326px;
  }

  h3 {
    display: flex;
    margin-top: 5rem;
  }
  img {
    width: 50px;
    height: 50px;
  }
`;
