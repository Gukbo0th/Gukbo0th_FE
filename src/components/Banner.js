import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../assets/banner1.svg";

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
        <Slide>
          <img src={Banner1} />
        </Slide>
        <Slide>
          <img src={Banner1} />
        </Slide>
        <Slide>
          <img src={Banner1} />
        </Slide>
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

const Slide = styled.div`
  width: 100%;
  height: 60vh;
  background-color: #fff;
  img {
    width: 60%;
    margin: 30px auto;
  }
`;
