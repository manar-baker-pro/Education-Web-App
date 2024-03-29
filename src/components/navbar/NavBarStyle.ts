import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
interface CustomLink {
  fontSize?: string;
  opacity?: any;
  zindex?:string;
}
interface CustomDrop {
  backgroundColor?: string;
}
interface ChatStyle {
  Location?: any;
}
interface NavStyle {
  IsDropDownRes?: any;
}

export const breatheAnimation = keyframes`
 0% { opacity: 0 }
 20% { opacity: 0.4 }
 100% {  opacity: 1; }
`;
const NavBarBody = styled.div<ChatStyle>`
  display: "flex";
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: fixed;
  top: 0;
  left: 0px;
 
  z-index: 100;
  padding: 5px 50px;
  background-color: #fff;
  border: none;
  box-shadow: 0px 0px 15px rgb(0 0 0 / 10%);
  min-height: 70px;
  color: black;
  font-size: 14px;
  @media only screen and (max-width: 600px) {
    border-radius: 0;
    width: 100%;
    margin-top: 0;
    left: 0;
    padding: 5px 30px;
  }
`;
const NavLogoName = styled.div`
  font-size: 1.7em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  // position: relative;
  transition: 0.7s all ease-in-out;
  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
    /* font-size:10px; */
  }
`;
const NavLinks = styled(Link)<CustomLink>`
  display: flex;
  align-items: center;
  color: black;
  font-weight: 500;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.2em")};
  text-decoration: none;
  margin-left: 20px;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
  
  &:hover {
    color: #c040ef;
  }
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    z-index: ${(props) => (props.zindex ?props.zindex  : "")};
    opacity: ${(props) => (props.opacity ? props.opacity : "1")};
  }
`;
const ProfileItem = styled.div`
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
  &:hover {
    color: #c040ef;
    // letter-spacing:2px;
  }
`;

const Navele = styled.div<NavStyle>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2em;
  margin-left: 20px;
  padding: 5px;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    position: relative;
    height: ${(props) => (props.IsDropDownRes ? "460px": "0px")};
    align-items: ${(props) => (props.IsDropDownRes ? "flex-start" : "initial")};
    padding-left: ${(props) => (props.IsDropDownRes ? "35%" : "initial")};

    /* background-color: red; */
  }
`;
const NavImg = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 100%;
  margin: auto 10px;
`;

const DropBody = styled.div<CustomDrop>`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  height: auto;
  width: 150px;
  position: absolute;
  top: 55px;
  right: 17px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  box-shadow: 0 3px 21px 0 rgb(0 0 0 / 20%);
  animation-name: ${breatheAnimation};
  animation-duration: 0.4s;
  z-index: 999;
`;

export {
  NavBarBody,
  NavLogoName,
  NavInfo,
  ProfileItem,
  NavLinks,
  Navele,
  NavImg,
  DropBody,
};
