
import { Link } from "react-router-dom";
import styled from "styled-components";
import header from "../../images/hom1.jpg";
interface Paragraph {
  color?: string;
  width?: string;
  lineHight?: string;
}
interface HeadFont {
  fontSize?: string;
}
interface ButtonSlide extends MainContianer {
  fontFamily?: string;
}
interface MainContianer {
  backgroundColor?: string;
  flexDirection?: string;
}
interface Movement {
  right?: string;
  top?: string;
  rightRes?: string;
  topRes?: string;
}
interface SliderIcon {
  backgroundImage?: string;
}

const Homediv = styled.div`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: max-content;
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #e6dbf4;
  background: linear-gradient(
      0deg,
      rgb(153, 170, 214, 0.8),
      rgb(114, 80, 241, 0.75)
    ),
    url(${header});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const ImgeHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  width: 100%;
  height: 60%;
`;
const InfoHeader = styled.div`
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: clamp(1.2rem, 2vw, 3rem);
  color: white;
  position: relative;
  top: 0;
  left: 0;
  z-index: 90;
`;
const ParaHeader = styled.div<Paragraph>`
  color: ${(props) => (props.color ? props.color : "white")};
  line-height: ${(props) => (props.lineHight ? props.lineHight : "20px")};
  word-spacing: 2px;
  max-width: ${(props) => (props.width ? props.width : "auto")};
  padding: 10px;
  position: relative;

  @media only screen and (max-width: 600px) {
    font-size: 16px !important;
    width: 500px;
    padding: 6px;
  }
`;
const ParaSlide = styled.p<Paragraph>`
  color: ${(props) => (props.color ? props.color : "white")};
  line-height: ${(props) => (props.lineHight ? props.lineHight : "25px")};
  font-weight: 400;
  font-size: 13px;
  color: #777;
  letter-spacing: 0.5px;
  width: ${(props) => (props.width ? props.width : "auto")};
`;
const HeaderButton = styled.button<ButtonSlide>`
  cursor: pointer;
  color: #fff;
  background: transparent;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  width: 200px;
  height: 60px;
  padding: 1rem 3rem;
  margin: 0;
  z-index: 1000;
  margin-top: 15px;
  position: relative;
  &::before,
  &::after {
    margin: 0px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    color: #fff;
  }

  &::before {
    content: "";
    background: linear-gradient(to right, #5e4f91, #5e4f91, #bd2ef2);
    -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 50%, 100% 100%, 0% 100%);
    clip-path: polygon(0% 0%, 100% 0, 100% 50%, 100% 100%, 0% 100%);
    transition: clip-path 0.4s cubic-bezier(0.2, 1, 0.8, 1),
      -webkit-clip-path 0.4s cubic-bezier(0.2, 1, 0.8, 1);
    z-index: -100;
  }

  &:hover::before {
    -webkit-clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  }
  &:hover span {
    transform: translate3d(-10px, 0, 0);
  }
  @media screen and (max-width: 600px) {
    font-size: 14.5px;
    width: 150px;
    height: 50px;
    padding: 12px;
  }
`;
const SpanButton = styled.span`
  color: #fff;
  display: block;
  transition: transform 0.4s cubic-bezier(0.2, 1, 0.8, 1);
`;

const CardCon = styled.div`
  display: flex;
  width: 100%;
  height: 53%;
  justify-content: center;
  align-items: center;
  justify-items: center;
  flex-wrap: wrap;
  color: #242625;
  @media screen and (max-width: 600px) {
    height: 480px;
  }
`;
const ImageStyle = styled.img`
  width: 200px;
  height: 230px;
  margin-left: 20px;

  @media screen and (max-width: 600px) {
    width: 100px;
    height: 120px;
    margin-left: 0px;
  }
`;
const ButtonService = styled.div<Movement>`
  background: #e6dbf4;
  display: inline-flex;
  align-items: center;
  position: absolute;
  right: ${(props) => (props.right ? props.right : "")};
  top: ${(props) => (props.top ? props.top : "")};
  justify-content: center;
  float: left;
  font-size: 36px;
  height: 30px;
  margin: 0 5px 0 0;
  width: 60px;
  box-shadow: 0px 0px 15px rgb(0 0 0 / 10%);
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  &:hover {
    cursor: pointer;
    background: #dfa8f4;
    color: #fff !important;
  }
  &:before {
    content: "";
    position: absolute;
    top: -15px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 15px solid #e6dbf4;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 15px solid #e6dbf4;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  &:hover::before {
    border-bottom: 15px solid #dfa8f4;
  }
  &:hover::after {
    border-top: 15px solid #dfa8f4;
  }
  & span {
    display: block;
    height: 100%;
    padding-top: 8px;
    text-align: center;
    width: 100%;
  }
  &:hover span {
    color: red;
  }
  & span::before {
    content: attr(title);
    background: #e6dbf4;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    font: 14px "Ubuntu Mono", monospace;
    opacity: 0;
    position: absolute;
    top: -5px;
    left: 0;
    text-transform: uppercase;
    transition: 0.1s all ease-in-out;
    width: 100%;
    z-index: 1000;
  }
  @media screen and (max-width: 600px) {
    width: 45px;
    height: 20px;
    font-size: 26px !important;
    right: ${(props) => (props.rightRes ? props.rightRes : "")};
    top: ${(props) => (props.topRes ? props.topRes : "")};

    &:after {
      border-left: 23px solid transparent;
      border-right: 23px solid transparent;
      border-top: 15px solid #e6dbf4;
    }
    &:before {
      border-left: 22.8px solid transparent;
      border-right: 22.8px solid transparent;
      border-bottom: 15px solid #e6dbf4;
    }
  }
`;

const Card = styled.div`
  width: 25%;
  height: 90%;
  padding: auto;
  text-align: center;
  background: #e6dbf4;
  margin: 20px;
  z-index: 2;
  @media screen and (max-width: 600px) {
    width: 70%;
    height: 55%;
    background: #c9c4f1;
  }
`;
const CardContent = styled.div`
  width: 90%;
  height: 95%;
  background: #fff;
  margin: 10px auto;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
  box-shadow: 0px 0px 22px #59585c99;
  transition: 0.3s all ease-in-out;
  &:hover {
    margin-top: -10px;
  }
`;
const SlideCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  height: max-content;
  z-index: 92;
`;
const SlideBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  width: 250px;
  box-shadow: 0px 0px 0px 2px #eee;
  min-height: 210px;
  margin: 20px;
  background-color: white;
  color: black;
  border-radius: 20px;
  top: -30px;
  @media screen and (max-width: 600px) {
    top: -40px;
  }
`;

const SlideImg = styled.div<SliderIcon>`
  width: 90px;
  height: 90px;
  line-height: 90px;
  margin: auto;
  position: relative;
  margin-bottom: 30px;
  background: #5e4f91;
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : ""};
  background-position: center;
  background-size: 65px;
  background-repeat: no-repeat;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  &:hover {
  }
  @media screen and (max-width: 600px) {
  }
`;
const SlideHead = styled.h2<HeadFont>`
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : "clamp(0.8rem, 1.2vw, 1.4rem)"};
  margin-top: 10px;

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
const SlideLangCon = styled.div`
  position: relative;
  padding-top: 200px;
  background-color: #e6dbf4;
  padding-bottom: 0px;
  @media screen and (max-width: 600px) {
    padding-top: 150vh;
  }
`;
const SideBeeContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  height: max-content;
  @media screen and (max-width: 600px) {
    justify-content: space-around;
    width: 65%;
  }
`;

const SlidLang = styled.div<MainContianer>`
  text-transform: capitalize;
  height: max-content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#e6dbf4"};
`;
const SlideLangImage = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-position: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px;
  @media screen and (max-width: 750px) {
    /* display: none; */
    padding: 10px;
    height: 400px;
  }
`;
const SlidLangBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: red;
`;
const ParaLang = styled.div`
  background-color: #e6dbf4;
  padding: 25px;
  border-radius: 10px;
  color: rgb(0, 0, 0, 0.7);
  margin-top: 20px;
  width: 350px;
  position: relative;
  line-height: 20px;

  @media only screen and (max-width: 600px) {
    font-size: 12px !important;
    width: 180px;
    padding: 10px;
  }
`;
const SlideLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
export {
  ImgeHeader,
  Homediv,
  InfoHeader,
  ParaHeader,
  HeaderButton,
  SlideCont,
  SlideBody,
  SlideImg,
  SlideHead,
  SlidLang,
  SlidLangBody,
  SlideLink,
  SlideLangImage,
  CardCon,
  CardContent,
  Card,
  ParaSlide,
  SideBeeContainer,
  SlideLangCon,
  ButtonService,
  SpanButton,
  ImageStyle,
  ParaLang,
};
