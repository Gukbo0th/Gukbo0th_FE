import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Banner from "../components/Banner";
import dummy from "../dummy.json";
import bottom from "../assets/bottom.svg";

const MainPage = () => {
  return (
    <>
      <Banner />
      <Section>
        <Header>
          <h3>현재 진행 중인 펀딩</h3>
          <ViewAll to="/funding">전체보기 {`>`}</ViewAll>
        </Header>
        <Container>
          {dummy.items.map((item) => (
            <Item key={item.id}>
              <img src={item.img} />
              <Info>
                <Name>{item.name}</Name>
                <Price>{item.price}원</Price>
              </Info>
            </Item>
          ))}
        </Container>
      </Section>
      <Bottom src={bottom} />
    </>
  );
};

export default MainPage;

const Section = styled.div`
  padding: 30px 150px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  h3 {
    font-size: 1.5rem;
    margin-left: 16px;
  }
`;

const ViewAll = styled(Link)`
  font-size: 1rem;
  font-weight: 600;
  margin-right: 10px;
  padding-top: 14px;
  color: #000;
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  gap: 10px;
`;

const Item = styled.div`
  img {
    width: 300px;
  }
`;

const Info = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

const Name = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const Price = styled.p`
  width: 270px;
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 0px;
`;

const Bottom = styled.img`
  width: 100%;
  margin-top: 100px;
`;
