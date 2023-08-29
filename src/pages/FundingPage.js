import React from "react";
import styled from "styled-components";
import dummy from "../dummy.json";
import { useNavigate } from "react-router-dom";

const FundingPage = () => {
  const navigate = useNavigate();
  const goDetailPage = () => {
    navigate("/detail");
  };
  return (
    <Wrapper>
      <Text>
        <h3>당신의 고귀한 헌신을 기억하는 방법</h3>
        <p>그들을 기억하며 실천하는 당신 또한 우리의 영웅입니다.</p>
      </Text>
      <Container>
        {dummy.all.map((item) => (
          <Item key={item.id} onClick={goDetailPage}>
            <img src={item.img} />
            <Info>
              <Name>{item.name}</Name>
              <Price>{item.price}원</Price>
            </Info>
          </Item>
        ))}
      </Container>
    </Wrapper>
  );
};

export default FundingPage;

const Wrapper = styled.div`
  padding: 30px 150px;
`;

const Text = styled.div`
  margin-bottom: 50px;
  h3 {
    margin-top: 40px;
    margin-bottom: 0px;
    font-size: 1.6rem;
  }
  p {
    font-size: 0.9rem;
    color: gray;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 28px;
  grid-row-gap: 60px;
  margin-top: 44px;
`;

const Item = styled.div`
  width: fit-content;
  height: 300px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  img {
    width: 280px;
  }
`;

const Info = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  margin-left: 4px;
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
