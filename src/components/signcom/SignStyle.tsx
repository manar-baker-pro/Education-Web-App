import styled, { createGlobalStyle } from "styled-components";
import { ScreenShap, Signpara } from "./SignInterfaces";
import imgCover from "../../images/new2.jpg";
interface FormBack {
  background?: string;
  backgrondImage?: string;
}
interface Aligned {
  alignItems?: string;
  justifyContent?: string;
}

interface ColorHeader {
  color?: string;
}
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Raleway, sans-serif;
    box-sizing: border-box;
  	background: linear-gradient(90deg, #C7C5F4, #776BCC);
    width: 100vw;
    height: 100vh;
    display:flex;
    align-items:flex-end;
    justify-content: center;
    letter-spacing: 2px;
    overflow: hidden;
  }
`;
const SignCont = styled.div`
  position: relative;
  width: 60vw;
  height: 82vh;
  margin-left:auto;
  margin-top: 9%;
  margin-bottom:20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 14px;
  border-radius: 10px;
  @media only screen and (max-width: 570px) {
  /* height: 82vh; */

  }
`;
const HeaderSignture = styled.h1<ColorHeader>`
  color: ${(prop) => (prop.color ? prop.color : "#fff")};
  font-size: 26px !important;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: 600;
  text-align: center;
  padding-top: 60px;
`;
const Welcome = styled.div`
  color: whitesmoke;
  padding: 1px;
  display: flex;
  margin-top: 150px;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  font-size: 20px;
  text-align: center;
  filter: drop-shadow(0 0 3px rgba(17, 17, 17, 0.245));
`;
const WelcomeParg = styled.p`
  width: 250px;
  text-align: end;
  color: #c8adf4;
  margin-left: 20%;
  font-size: 14px;
  margin-top: 30px;
`;
const Screen = styled.div<FormBack>`
  background: ${(props) => (props.background ? props.background : "#fff")};
  background-image: ${(props) =>
    props.backgrondImage ? props.backgrondImage : `url(${imgCover})`};
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  width: 50%;
  height: 100%;
  position: relative;
  align-items: center;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  padding-top:0px;
  box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.7);
  @media only screen and (max-width: 600px) {
    position: fixed;
    top: 56px;
    left: 75px;
    width: 70vw;
    height: 82.5vh;
    margin: 20px -5px;
    border-radius: 10px;
    box-shadow: 2px 0px 8px rgba(0, 0, 0, 0.3);
  }
`;

const SignForm = styled.div<{ paddingTop?: string }>`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding-left: 50px;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "20px")};
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-left: 10%;

  }
`;
const SignRoute = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute;
  bottom: 17%;
  left: 0;
  right: 0;
  @media only screen and (max-width: 570px) {
    bottom: 10%;
  }
`;
const SignLabel = styled.label`
  color: #999;
  transform: translate(0.25rem, -3.7rem);
  transition: all 0.2s ease-out;
`;
const SignRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Signp = styled.p<Signpara>`
  color: ${(props) => (props.error ? "red" : props.color)};
  padding: 0;
  /* margin-top: 10px; */
  margin-left: 10px;
`;
const ScreenCont = styled.div`
  z-index: 1;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
export {
  SignCont,
  SignRow,
  Signp,
  SignLabel,
  Screen,
  HeaderSignture,
  Welcome,
  WelcomeParg,
  ScreenCont,
  SignRoute,
  SignForm,
  GlobalStyle,
};
