import { url } from "inspector";
import styled, { keyframes } from "styled-components";
import AttachmentSharpIcon from "@mui/icons-material/AttachmentSharp";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

interface Avatar {
  backgroundImage?: string;
  alignSelf?: string;
  marginRight?: string;
  marginLeft?: string;
}

interface message {
  backgroundColor?: string;
  float?: string;
  borderBottom?: string;
  borderTop?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  marginRight?: string;
  flexDirection?: string;
}
/* =====CHAT CONVERSATION COMPONENT STYLE ===== */
/* ===== CHAT TITLE COMPONENT ===== */

const ChatTitleCon = styled.div`
position: absolute;
top: 0;
z-index: 1;
width: 100%;
height: 11%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 2px 0;
background-color: rgb(240, 240, 240);
border-left: 0.2px solid rgba(0, 0, 0, 0.1);
box-shadow: 78px 10px 15px rgba(0, 0, 0, 0.1);
@media only screen and (max-width: 600px) {
      height: 13vh;
      padding-right:10px;
     
}
`;
const ChatTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;

`;
const GroupAvatar = styled.div<Avatar>`
  margin: auto 5px;
  margin-left: 20px;
  margin-right: 20px;
  height: 45px;
  background-image:${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : null};
  background-position: center;
  background-size: cover;
  width: 45px;
  border-radius: 40px;
  cursor: pointer;
`;
const GroupName = styled.div`
  cursor: pointer;
  font-weight: 500;
`;
const BackTo = styled.div`
  display: none;
  align-items: center;
  margin: 10px;
  

  color: #707070;
  cursor: pointer;
  
  @media only screen and (max-width: 800px) {
    display: flex;

    align-self: center;
  }
`;
const CountgroupMembers = styled.div`
  font-size: 11px;
  color: #707070;
`;
const LogOut = styled.div`
  margin: 15px;
  display: flex;
  color: #707070;
  font-size: 14px;
  z-index: 100;
  cursor: pointer;
  text-transform: capatalize;
`;
/* ===== CHAT Form COMPONENT ===== */
const FormCont = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0;
  margin: 0;
  width: 100%;
  padding-bottom: 4px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-bottom: 0;
  }
`;
const RelForm = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const CustTextarea = styled.textarea`
  resize: none;
  font-size: small;
  min-height: 53px;
  width: 95%;
  max-height: 200px;
  overflow-y: auto;
  white-space: pre-line;
  padding: 0.8rem 60px;
  padding-bottom: 0rem;
  border: 0;
  border-radius: 30px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.8);
  background-color: rgb(240, 240, 240);
  transition: box-shadow 0.5s ease;
  scrollbar-width: none !important;
  letter-spacing: 1.4px;
  &::-webkit-scrollbar {
    display: none;
  }
  &:focus {
    outline: none;
  }
  &:valid {
    box-shadow: none;
    color: #18191a;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    border-radius: 0;
  }
`;

const AnticonPaperclip = styled(AttachmentSharpIcon)`
  position: absolute;
  margin-top: 12px;
  left: 52px;
  cursor: pointer;
  display: inline-block;
  color: rgb(132, 129, 129);
  font-size: 30px;
  transform: rotate(140deg);
  @media only screen and (max-width: 600px) {
    left: 28px;
  }
`;
const MessageButton = styled.div`
  position: absolute;
  cursor: pointer;
  display: inline-block;
  right: 40px;
  top: 13px;
  @media only screen and (max-width: 600px) {
    right: 20px;
  }
`;
const AnticonArrowup = styled(SendRoundedIcon)`
  color: #a78cf9;
  font-size: 22px !important;
  filter: drop-shadow(0 0 1px rgb(30, 30, 30, 0.4));
`;

/* ====Chat message component ===== */
const ListMessages = styled.div`
  height: 80%;
  width: 100%;
  overflow-x: hidden;
  margin-bottom: 5.1%;
  margin-top: 6.9%;
  padding-bottom: 3%;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #776ef7 #c3c6f1;
  @media only screen and (max-width: 600px) { 
   
      margin-top: 15%;
      margin-bottom: 1%;
  }
  scrollbar-color: #776ef7 #c3c6f1;
  `;
const ListMessagesItem = styled.li`
  list-style: none;
`;
const ConMessageDate = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 12px;
  color: black;
`;
const MessageItem = styled.div<message>`
  margin-left: 2%;
  display: flex;
  flex-flow: row wrap;
  height: max-content;
  // max-height: 700px;
  width: 90%;
  float: ${(props) => (props.float ? props.float : "")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : ""};
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const MessageAuth = styled.div`
  font-weight: 500;
`;
const MessageTimestamp = styled.div`
  position: absolute;
    padding: 13px;
    margin: 0px 3px;
    margin-left: 10px;
    color: red !important;
    font-size: 0.65rem;
    display: flex;
    bottom: 2px;
    right: 0;
    padding-bottom: 0;
     @media only screen and (max-width: 600px) {
           
              font-size: 8px !important;
          
     }
  `;
const MessageContainer = styled.div`
  display: flex;
`;

const MessageInfo = styled.div<message>`
  position: relative;
  padding: 5px 8px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ""};
  max-width: 40%;
  height: max-content;
  text-align: left;
  box-shadow: 0px 10px 15px rgb(0, 0, 0, 0.2);
  border-radius: 10px;
  font-size: small;
  padding-right: 65px;
  caret-color: #a78cf9;
  margin-bottom: 10px;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-bottom: ${(props) => (props.borderBottom ? props.borderBottom : "")};
    border-top: ${(props) => (props.borderTop ? props.borderTop : "")};
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    top: ${(props) => (props.top ? props.top : "")};
    left: ${(props) => (props.left ? props.left : "")};
    right: ${(props) => (props.right ? props.right : "")};
    bottom: ${(props) => (props.bottom ? props.bottom : "")};
    z-index: 0;
  }
  @media only screen and (max-width: 600px) {
    padding: 1px 8px;
    width: 70%;
    max-width: 80%;
  }
`;
const AvatarMessage = styled.div<Avatar>`
  width: 30px;
  height: 30px;
  border-radius: 40px;
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : null};
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : "")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "")};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30px;
  box-shadow: 0, 10, 15, rgb(11, 10, 10);
  transition: all 0.33s ease 0s;

  clear: both;
`;
const MessageContent = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
`;
export {
  AvatarMessage,
  MessageInfo,
  MessageContainer,
  MessageTimestamp,
  MessageAuth,
  MessageItem,
  ConMessageDate,
  ListMessagesItem,
  ListMessages,
  AnticonArrowup,
  MessageButton,
  AnticonPaperclip,
  CustTextarea,
  RelForm,
  FormCont,
  LogOut,
  CountgroupMembers,
  BackTo,
  GroupName,
  GroupAvatar,
  ChatTitle,
  ChatTitleCon,
  MessageContent,
};
