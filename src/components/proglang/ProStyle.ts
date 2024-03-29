import { Link } from "react-router-dom";
import styled from "styled-components";
interface ItemClick {
  active: boolean;
}
const Prodiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #f2edf3;
  min-height: 91vh;
  width: 100%;
  box-sizing: border-box;
  margin-top: 53px;
`;
const SideDiv = styled.div<ItemClick>`
  display: flex;
  flex-direction: column;
  transition: 0.2s all ease-in-out;
  overflow-y: auto;
  box-shadow: 0px 0px 15px rgb(0 0 0 / 10%);
  overflow-x: hidden;
  width: ${(props) => (props.active ? "215px" : "50px")};
  background-color: white;
  position: fixed;
  left: 0;
  height: 100vh;
  top: 0;
  padding: 20px 3px;
  z-index: 200;
`;
const ProHead = styled.h2`
  padding: 10px;
  font-family: "Railway";
`;
const ChapterNo = styled.div<ItemClick>`
 display: flex;
  align-items: center;
  text-transform: capitalize;
  display: block;
  margin-top: 25px;
  width: 100%;
  overflow: hidden;
  overflow-wrap: break-word;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  font-size: 16px;
  color: ${(props) => (props.active ? "#5e4f91" : "black")};
  border-left: ${(props) => (props.active ? "4px solid #5e4f91" : "")};
  padding: 0px 13px;
  padding-left: 10px;
`;
const ProLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 20px; */
  margin-left: 15%;
  margin-top: 50px;
  width: 70%;
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-left: 0%;
  }
`;

const ProButton = styled.button`
  margin-top: 10px;
  cursor: pointer;
  width: 150px;
  height: 50px;
  margin: 20px;
  border: none;
  color: white;
  font-size: 1em;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #7f73d0;
  border-radius: 10px;
  &:hover {
    background-color: #a78cf9;
  }
`;
const QuestionShow = styled.div`
  display: flex;
  margin-top: 20px;
  height: fit-content;
  padding: 10px;
  line-height: 25px;
  color: rgb(40, 44, 52);
  box-shadow: 0px 0px 0px 2px #eee;
  white-space: pre-wrap;
  border-radius: 5px;
`;
const OptionShow = styled.div`
  box-shadow: 0px 0px 0px 2px #eee;
  background-color: rgb(238, 245, 240);
  border-radius: 10px;
  margin-top: 10px;
  padding: 15px;
  font-size: 1.2em;
  cursor: pointer;
`;

const QuestionBody = styled.textarea`
  display: flex;
  margin-top: 20px;
  padding: 14px;
  font-size: 18px;
  color: black;
  height: 70px;
  width: 75%;
  background: #ffff;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  resize: none;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 600px) {
    font-size: 14px;


  }
`;
const OptionBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 10px;
  background:#fff;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 70%;

  @media only screen and (max-width: 600px) {
    width: 75%;

  }

`;

const OptionContent = styled.textarea`
  background-color: transparent;
  border-radius: 10px;
  margin-top: 5px;
  width: 90%;
  padding: 0px 5px;
  font-size: 18px;
  resize: none;
  border: none;
  color: black;
  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    display: none !important;
  }
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
const OptionInput = styled.input`
  margin: 3px;
  color: black;
 
`;
export {
  Prodiv,
  SideDiv,
  MainDiv,
  ChapterNo,
  ProLink,
  ProButton,
  QuestionBody,
  OptionBody,
  OptionContent,
  OptionInput,
  QuestionShow,
  OptionShow,
  ProHead,
};
