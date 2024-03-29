import styled, { keyframes } from "styled-components";
import back from "../../../images/back.png";
interface UserLine {
  backgrondImage: any;
}
interface Tranform {
  transform?: string;
}
export const breatheAnimation = keyframes`
 0% { opacity: 0 }
 20% { opacity: 0.4 }
 100% {  opacity: 1; }
`;

// custom manar style
// Chat history component style
const ChatContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow-x: hidden;
  background-color: red;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ConvList = styled.div<Tranform>`
  height: 100%;
  position: relative;
  width: 30%;
  flex: 0 0 30%;
  background-color: rgb(240, 240, 240);
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  box-sizing: border-box;

  @media only screen and (max-width: 600px) {
    width: 200vw;
    flex: 0 0 100vw;
    overflow-x: hidden;
    transition: all 0.3s linear;
    order: ${(props) => (props.transform ? props.transform : "")};
  }
`;
const ChatConvContainer = styled.div<Tranform>`
  box-sizing: border-box;
  position: relative;
  width: 70vw;
  flex: 0 0 70vw;
  height: 100vh;
  background-color: #a78cf9;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  @media only screen and (max-width: 600px) {
    position: relative;
    width: 100vw;
    flex: 0 0 100vw;
    font-size: small;
    transition: all 0.3s linear;
    order: ${(props) => (props.transform ? props.transform : "")};
  }
`;

// conversation
//chat Modal members
const AvatarUser = styled.div<UserLine>`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  color: white;
  text-align: center;
  background-image: ${(props) =>
    props.backgrondImage ? props.backgrondImage : null};
  background-color: white;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 48px;
`;
const HeaderHistory = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-around;
  height: 7.5%;
`;
const SearchCon = styled.div`
  display: flex;
  background-color: #dfdfe2;
  width: 100%;
  height: 90%;
  margin: 0 10px;
  align-items: center;
  border-radius: 6px;
`;
const SearchBox = styled.div`
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;
  width: 90%;
  height: 90%;
  margin: 0 20px;
  &::focus {
    border: 2px solid #a78cf9;
  }
`;

const SearchBtn = styled.button`
  background-color: #dfdfe2;
  border: none;
  cursor: pointer;
  padding: 0 10px;
  margin: 4px;
`;
const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  background-color: #dfdfe2;
  color: #707070;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
`;

/*====== conversation component style=====  */
/*===== conversation item style=====  */

const ConversationList = styled.div`
  width: 100%;
  height: 89%;
  overflow-y: scroll;
  overflow-x: hidden;

  scrollbar-width: thin;
  scrollbar-color: #776ef7 #c3c6f1;
`;
const ConversationItem = styled.div`
  list-style: none;
  color: #170321;
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
  border: none;
  height: auto;
  flex-wrap: wrap;
  padding: 10px;
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    background-color: #c8cdfce7;
  }
`;
const LangAvatar = styled.div<UserLine>`
  width: 45px;
  height: 45px;
  border-radius: 400px;
  background-image: ${(props) =>
    props.backgrondImage ? `url(${props.backgrondImage})` : ""};
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  background-position: center;
  background-size: cover;
`;
const ContainConv = styled.div`
  display: flex;
  height: 100%;
  width: 83%;
  flex-wrap: wrap;
`;
const LangInfo = styled.div`
  width: 100%;
  display: flex;
  margin-left: 4px;
  align-items: flex-start;
  justify-content: space-between;
`;
const GroupName = styled.div`
  display: flex;

  font-weight: 500;
`;

const LangDate = styled.div`
  color: #707070;
  font-size: 11px;
`;
const LastMessageInfo = styled.div`
  font-size: 11px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #707070;
`;
const MessCon = styled.div`
  display: flex;
`;

const NameAuthLastMessage = styled.div`
  color: rgb(46, 0, 139);
`;
const CountNotReadMessage = styled.div`
  width: 22px;
  height: 22px;
  padding: 4px;
  font-size: 10px;
  text-align: center;
  background-color: rgba(167, 140, 249, 0.6);
  border-radius: 10px;
  color: whitesmoke;
`;
const LastMessageContain = styled.div`
  overflow: hidden;
`;

/* ======ChatSetting Component style=====  */
const ChatSetting = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 10px 14px;
  font-size: 14px;
  color: #707070;
  background: #ffffff;
  transition: all 0.3s ease;
  width: 20%;
  z-index: 2;
  filter: none !important;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.4);
  @media only screen and (max-width: 600px) {
    font-size: 11px;
    width: 50%;
    padding: 10px;
  }
`;
const CloseSetting = styled.div`
  left: -300px;
  z-index: 2;
`;
const ChatSettingLink = styled.a`
  display: flex;
  text-decoration: none;
  transition: all 0.3s linear;
`;
const Menu = styled.div`
  width: 100%;
  height: 100%;
`;
const CloseMenueIcon = styled.div`
  position: absolute;
  right: 4px;
  top: 4px;
  cursor: pointer;
  font-size: small;
`;
const CloseIcon = styled.div`
  font-size: 20px !important;
`;
const MenuLinks = styled.div`
  width: 100%;
  height: 100%;
`;
const MenuLinksItem = styled.div`
  height: 8%;
  width: 100%;
  padding: 10px;
  list-style: none;
  display: flex;
  align-items: center;
  margin-top: 10px;
  transition: all 0.3s linear;
  &:hover {
    background-color: #c8cdfce7;
    border-radius: 5px;
  }
`;
const ProfAvatar = styled.div`
  min-width: 50px;
  border-radius: 6px;
`;
const ChatSettingIcon = styled.div`
  border-radius: 6px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ChatSettingText = styled.div`
  color: #707070;
  font-weight: 500;
  white-space: nowrap;
`;

/* ============== header avatar============= */
const ChatSettingHeader = styled.div`
  position: relative;
  height: 10%;
  border-bottom: 1px solid #c3c1c4;
`;
const ProfileUser = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
`;
const UserName = styled.div`
  margin-top: 10px;
  font-weight: 600;
`;
const TransformTo = styled.div<Tranform>`
  transform: ${(props) => (props.transform ? props.transform : "")};
`;

export {
  ChatContainer,
  ConvList,
  TransformTo,
  ChatConvContainer,
  AvatarUser,
  HeaderHistory,
  UserName,
  ProfileUser,
  ChatSettingHeader,
  ChatSettingText,
  ChatSettingIcon,
  ProfAvatar,
  MenuLinksItem,
  MenuLinks,
  CloseIcon,
  CloseMenueIcon,
  Menu,
  ChatSettingLink,
  CloseSetting,
  ChatSetting,
  LastMessageContain,
  CountNotReadMessage,
  NameAuthLastMessage,
  MessCon,
  LastMessageInfo,
  LangDate,
  GroupName,
  LangInfo,
  ContainConv,
  LangAvatar,
  ConversationItem,
  ConversationList,
  SearchInput,
  SearchBtn,
  SearchCon,
  SearchBox,
};
