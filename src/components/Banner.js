import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../assets/banner1.svg";
import Banner2 from "../assets/bb2.svg";

const Banner = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnFocus: true,
    pauseOnDotsHover: true,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <Slide1>
          <img src={Banner1} />
        </Slide1>
        <Slide2>
          <TextWrapper>
            <h1>대한민국의 국보 1호 숭례문?!</h1>
            <h2>
              그보다 값진 우리의 국보 0호는 바로
              <br />
              나라를 위해 한 몸 기꺼이 바친 영웅들!
            </h2>
            <h3>국가유공자분들을 기억하며 우리도 후원에 동참하자</h3>
          </TextWrapper>
          <img src={Banner2} />
        </Slide2>
        {/* <Slide3>
          <img src="https://i.namu.wiki/i/nkwfcTAnhCC0pV5oM9FPmJ_QOuIsALl78RJYDIlr9rg425d2PE9pKLVoxAz_61LbkW_X3oSvtDEe-xNYknrqZA.webp" />
          <img src="https://i.namu.wiki/i/nkwfcTAnhCC0pV5oM9FPmJ_QOuIsALl78RJYDIlr9rg425d2PE9pKLVoxAz_61LbkW_X3oSvtDEe-xNYknrqZA.webp" />
          <img src="https://i.namu.wiki/i/nkwfcTAnhCC0pV5oM9FPmJ_QOuIsALl78RJYDIlr9rg425d2PE9pKLVoxAz_61LbkW_X3oSvtDEe-xNYknrqZA.webp" />
          <img src="https://i.namu.wiki/i/nkwfcTAnhCC0pV5oM9FPmJ_QOuIsALl78RJYDIlr9rg425d2PE9pKLVoxAz_61LbkW_X3oSvtDEe-xNYknrqZA.webp" />
        </Slide3> */}
      </Slider>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  max-width: 100%;
  .slick-dots {
    bottom: 50px;
  }
  .slick-slide {
    width: 100%;
    max-width: 100%;
  }
  .slick-slider {
    width: 100%;
    max-width: 100vw;
    overflow: hidden !important;
  }
`;

const Slide1 = styled.div`
  width: 100%;
  height: 60vh;
  background-color: #fff;
  img {
    width: 60%;
    margin: 30px auto;
  }
`;

const Slide2 = styled.div`
  width: 100%;
  height: 60vh;
  background-color: #20bafa;
  position: relative;
  img {
    width: 500px;
    position: absolute;
    top: 180px;
    right: 150px;
  }
`;

const TextWrapper = styled.div`
  margin-top: 60px;
  margin-left: 180px;
  h1 {
    color: #fff;
    font-size: 2.3rem;
    font-weight: 600;
  }
  h2 {
    color: #fff;
    font-size: 1.75rem;
  }
  h3 {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 70px;
  }
`;

// const Slide3 = styled.div`
//   width: 100%;
//   height: 60vh;
//   display: flex;
//   flex-direction: row;
//   img {
//     padding: 0 0;
//     margin-right: 0px !important;
//     width: 400px;
//   }
// `;
