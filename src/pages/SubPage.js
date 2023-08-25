import React from 'react';
import Image01 from "../assets/Sub_image_1.png"
import Image02 from "../assets/Sub_image_2.png"
import "../styles/SubPage.css"
import styled from "styled-components";
import dummy from "../dummy.json";
import ProgressBar from '../components/ProgressBar';
// 펀딩 상세 페이지

export default function SubPage() {
    
    return (
        <div className='wrapper'>
            <div className='main__container'>
                <img className="banner__image1" 
                    src={Image01}>
                </img>
                <div className='sub__title__01'>
                    <strong>삼일절 유관순 펀딩 <br></br></strong>
                    30,000 원
                    <hr className='hr__1'></hr>
                    <p className='sub__txt__02'>굿즈 안내</p>
                    <img className="banner__image2" 
                    src={Image02}>
                    </img>
                    <div>독립유공자 카드</div>
                    <square className='sub__txt__box'>3.1절
                    <span className='sub__txt__01'>
                    3.1운동은 독립 의지의 선언뿐 아니라 독립한 후 반봉건적 공화정인 국가 건설의 새로운 체제를 제시하였다. 왕정체제에서 벗어난 주권재민의 민주주의 국가 건설이란 방향의 제시였다.<br/> 인도주의, 정의, 자유에 기초한 민주국가로의 새나라 건설이었다. 정치적으로 반봉건적인 백성이 주인인 나라에로의 천명이었다. 백성이 주체가 되어 자치와 협동의 공동체를 건설하는 것이 우선이고 특권층의 특권의식과 반민주적 제도에 대한 반기였다.  
                    </span>
                    </square>
                    
                </div>
                <div className='people__info'>
                    {dummy.peoples.map((item) => (
                        <Item key={item.id}>
                            <Box>
                                <Name>{item.name}</Name>
                                <Info>{item.info}</Info>
                            </Box>
                        </Item>
          ))}        
                </div>
                
            </div>
        </div>
    );
}

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
  margin-bottom : 3rem;
`;

const Name = styled.p`
  font-size: 30px;
  font-weight: weight;
  margin-top: 10px;
  margin-right : 4rem;
  padding : 40px;
  width : 60%;
  height : 30%;
  background-color : #D9D9D9;
  align-items: center;
  text-align: center;
  border-radius : 1rem;
  
`;

const Info = styled.p`
  width: 270px;
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 0px;
`;
