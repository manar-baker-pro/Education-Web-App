import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breatheAnimation } from "../../navbar/NavBarStyle";
interface Side {
  backgroundColor?: string;
  fontSize?: string;
  padding?: string;
  margin?: string;
}
interface OpClose {
  toggle?: boolean;
}

const SideBarBody = styled.div<OpClose>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (!props.toggle ? "45px" : "250px")};
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2);
  transition: width 0.2s ease-out;
  overflow-x: hidden;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  padding: 4px;
  background: #fff;
  z-index: 100;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 600px) {
    width: ${(props) => (!props.toggle ? "38px" : "250px")};
    /* padding-left:0px; */
  }
  /* @media screen and (max-width: 900px) {
  } */
`;
const SideShapeBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  color: #9a55ff;
  font-size: 2.1em;
`;
const SideShap = styled.div<Side>`
  height: 15px;
  width: 15px;
  border-radius: 100%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "red"};
  margin: 5px;
`;
const SideLogoBody = styled.ul`
  display: flex;
  flex-direction: column;
`;
const SideItem = styled.li<Side>`
width: 100%;
padding:10px;
padding-left: 8px;
list-style: none;
display: flex;
align-items: center;
justify-content:center;
margin-top: 10px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  &:hover{
    // background-color:#;
    color:#be0ffd !important;
  }
  @media only screen and (max-width: 600px) {
    padding-left: 25px;
    font-size: 14px;
  }


  /* 
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : "clamp(0.8em,0.95rem,1.4rem)"}; */
`;

const SideShowOrHide = styled.div<OpClose>`
  display: ${(props) => (!props.toggle ? "none" : "flex")};
  align-items: center;
  width: 130px;
  animation-name: ${breatheAnimation};
  animation-duration: 1.3s;
  font-size: 1.1em;
`;

const SideNav = styled(NavLink)`
  color: gray;
  text-decoration: none;
  margin-top: 18px;
  &.active {
    color: #47137e;
    border-left: 4px solid #47137e;
  }
`;
const SideImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;
const SpanItem = styled.span`
  width: 30px;
  border-radius: 6px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    margin-right: 20px;
    font-size: 14px;

  }
`;

export {
  SideBarBody,
  SpanItem,
  SideShapeBody,
  SideShap,
  SideLogoBody,
  SideItem,
  SideShowOrHide,
  SideImage,
  SideNav,
};
