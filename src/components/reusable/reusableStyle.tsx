import styled from "styled-components";
import imgLogo from "../../images/Galaxy.png";
interface LogoStyle {
  width?: string;
  height?: string;
  backgroundImage?: string;
}
export const ButtonSignture = styled.button`
  outline: none;
  border: none;
  border-radius: 15px;
  width: 70%;
  height: 40px;
  background-color: #3f2088;
  font-size: 16px;
  color: whitesmoke;
  filter: drop-shadow(0 0 4px rgba(45, 39, 39, 0.4));
  cursor: pointer;
  transition: all 0.3s linear;
  box-shadow: 2px 0px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
overflow:hidden;
  &:hover {
    background-color: #472ea3;
    letter-spacing: 1.5px !important;
  }
  &::before {
    content: "";
    width: 0%;
    height: 100%;
    display: block;
    background: #832af6;
    position: absolute;
    -ms-transform: skewX(-10deg);
    -webkit-transform: skewX(-10deg);
    transform: skewX(-10deg);
    left: -10%;
    opacity: 1;
    top: 0;
    z-index: -12;
    -moz-transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
    -o-transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
    -webkit-transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
    transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
    box-shadow: 2px 0px 14px rgba(0, 0, 0, 0.6);
  }

  &::after {
    content: "";
    width: 0%;
    height: 100%;
    display: block;
    background: #9379ef;
    position: absolute;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    position:absolute;
    left: -10%;
    opacity: 0;
    top: 0;
    z-index: -15;
    -webkit-transition: all 0.94s cubic-bezier(0.2, 0.95, 0.57, 0.99);
    -moz-transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
    -o-transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
    transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
    box-shadow: 2px 0px 14px rgba(0, 0, 0, 0.6);
  }
  &:hover::before,
  &:hover::before {
    opacity: 1;
    width: 130%;

  }
  &:hover::after,
  &:hover::after {
    opacity: 1;
    width: 140%;

  }
  @media only screen and (max-width: 600px) {
    margin:-20px !important;
    /* color: red; */
  }
  
`;

export const ButtonCl = styled.button`
  /* font-weight: 600; */
  width: 200px;
  padding: 2px 10px;
  color: #fff;
  cursor: pointer;
  margin-top: 30px;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.4rem;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-image: linear-gradient(
    to right,
    #6905bb,
    #0551a8,
    #3800a0,
    #096ab9
  );
  // box-shadow: 0 2px 5px rgba(242, 97, 103, 0.4);
  &:hover {
    background-position: 98% 0;
    background-image: linear-gradient(
      to left,
      #0551a8,
      #6905bb,
      #096ab9,
      #3800a0
    );
    transition: all 0.5s ease-in-out;
  }
  &:focus {
    outline: none;
  }
`;
export const ChangeUserPic = styled.button`
  padding: 8px 14px;
  background:linear-gradient(90deg,#5e4f91,#a536d9);
  margin: 8px 0px;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  width:170px;
  cursor: pointer;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  &:hover {
  background:linear-gradient(90deg,#a536d9,#5e4f91);
  }
  &:focus {
    outline: none;
  }
`;
export const ShowError = styled.p`
  display: flex;
  font-size: 10px;
  text-align: center;
  text-transform:capitalize;
  color: #d90606;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 6px;
`;

export const Logo = styled.div<LogoStyle>`
  position: absolute;
  top: 10px;
  left: 80px;
  background-image: ${(props) =>
    props.backgroundImage ? props.backgroundImage : `url(${imgLogo});`};
  width: ${(props) => (props.width ? props.width : "110px")};
  height: ${(props) => (props.height ? props.height : "35px")};
  background-size: contain;
  background-position: contain;
  background-repeat: no-repeat;
  margin-left: 20px;
  @media only screen and (max-width: 600px) {
    width:90px;
    top: 15px;
    left: 25px;
  }
`;
