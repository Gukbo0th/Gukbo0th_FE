import React, { useState, useEffect } from "react";
import "../styles/SubPage.css";
import styled from "styled-components";
import dummy from "../dummy.json";
// import ProgressBar from '../components/ProgressBar';
// 펀딩 상세 페이지

export default function SubPage() {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(30000);

  const onCountDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const onCountIncrease = () => {
    setCount(count + 1);
  };

  const onCalculateTotal = () => {
    setTotal(count * total);
  };

  useEffect(() => {
    onCalculateTotal();
  }, []);

  return (
    <Wrapper>
      <Container>
        <ThumbnailImg src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2019/02/urbanbrush-20190216003323553259.png" />
        <Info>
          <h3>3.1절 탑골공원 펀딩</h3>
          <h6>30,000원</h6>
          <CountSection>
            <CountText>수량</CountText>
            <Counter>
              <button onClick={onCountDecrease}>-</button>
              <p>{count}</p>
              <button onClick={onCountIncrease}>+</button>
            </Counter>
          </CountSection>
          <TotalSection>
            <TotalText>합계</TotalText>
            <TotalValue>{total}</TotalValue>
          </TotalSection>
        </Info>
      </Container>
      <Subtitle>
        <Goods>
          <p>굿즈 안내</p>
        </Goods>
        <img src="https://mblogthumb-phinf.pstatic.net/MjAyMDAzMDFfNjkg/MDAxNTgzMDU2MDg3ODEw.ygF-T8haTxKlxeOohXtgb5hnM47gxrc1pdJtHMYopPMg._cASGASwRTQbwneRkVRtHLef2h4IjNjyx4dCicpa1lYg.JPEG.jiminihoi86/SE-cc31768a-d1e6-48ad-b0a2-a91bce014891.jpg?type=w800"></img>
        독립 유공자 카드
        <SubContainer>
          3.1절
          <ContainerTxt>
            <p>
              3.1운동은 독립 의지의 선언뿐 아니라 독립한 후 반봉건적 공화정인
              국가 건설의 새로운 체제를 제시하였다. 왕정체제에서 벗어난
              주권재민의 민주주의 국가 건설이란 방향의 제시였다.
              <br /> 인도주의, 정의, 자유에 기초한 민주국가로의 새나라
              건설이었다. 정치적으로 반봉건적인 백성이 주인인 나라에로의
              천명이었다. 백성이 주체가 되어 자치와 협동의 공동체를 건설하는
              것이 우선이고 특권층의 특권의식과 반민주적 제도에 대한 반기였다.
            </p>
          </ContainerTxt>
        </SubContainer>
        {dummy.peoples.map((item) => (
          <Item key={item.id}>
            <Box>
              <Name>{item.name}</Name>
              <Info>{item.info}</Info>
            </Box>
          </Item>
        ))}
      </Subtitle>
    </Wrapper>
  );
}

const Container = styled.div``;

const ThumbnailImg = styled.img`
  width: 400px;
`;

const CountSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const CountText = styled.p``;

const Counter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  button {
    width: 20px;
    height: 20px;
  }
`;

const TotalSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const TotalText = styled.p``;

const TotalValue = styled.p``;

const Item = styled.div`
  img {
    width: 50%;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 16px;
  margin-bottom: 3rem;
`;

const Name = styled.p`
  font-size: 30px;
  font-weight: weight;
  margin-top: 10px;
  margin-right: 10rem;
  padding: 40px;
  width: 60%;
  height: 30%;
  font-weight: bold;
  background-color: #d9d9d9;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 19px 0px rgba(119, 147, 65, 0.3);
`;

const Info = styled.p`
  width: 270px;
  position: relative;
  top: 50%;
  text-align: center;
  font-size: 1.3rem;
  margin-top: 15px;
  font-weight: bold;
  font-style: normal;
  font-weight: bold;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Subtitle = styled.div`
  display: flex;
  font-size: 32px;
  font-weight: normal;
  padding: 40px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 2.5rem;
`;

const Headline = styled.div`
  hr {
    margin: 10px;
    width: 50%;
    background: #000;
    height: 1px;
  }
`;

const Goods = styled.div`
  p {
    margin-top: 3rem;
    color: #000;
    font-family: Inter;
    font-size: 64px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`;

const SubContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  width: 1418px;
  height: 395px;
  font-size: 2rem;
  background-color: #d9d9d9;
  border: 1px solid black;
  border-radius: 1.5rem;
  align-items: center;
  text-align: center;
`;

const ContainerTxt = styled.div`
  p {
    margin-top: 2rem;
    display: flex;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 40px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    line-height: 2.5rem;
  }
`;
