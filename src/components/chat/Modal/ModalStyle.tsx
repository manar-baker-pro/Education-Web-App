import styled, { keyframes } from "styled-components";
interface Online {
  backgroundColor?: string;

}

const ModalBoxContainer = styled.div`
height: 100%;
background-color: transparent;
scrollbar-width: none;
display: flex;
flex-direction: column;
overflow-y: scroll;
border-radius: 10px;
&::-webkit-scrollbar {
    display: none;
`;
const InfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 26%;
  padding: 15px;
  background-color: #ffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
`;
const GroupDescription = styled.div`
  font-size: 13px;
  padding: 18px;
  background-color: #ffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
`;

const TitleGroup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px;
  font-weight: 500;
  width: 100%;
  color: #252426;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #ffff;
`;

const GroupName = styled.div`
  padding-left: 20px;
  align-self: center;
  text-transform: capitalize;
  font-weight: 500;
`;
const GroubMedia = styled.div`
  height: 100%;
  padding: 15px;
  width: 100%;
  background-color: #ffff;
  padding-bottom: 80px;
`;
const DropTitle = styled.div`
  display: flex;
  align-items: center;
`;
const TitleDrop = styled.div`
  align-self: flex-end;
`;
const DesTitle = styled.div`
  margin-top: 5px;
  text-transform: uppercase;
  color: rgb(84, 84, 83, 0.6);
`;
const ListFrame = keyframes`
0%{
  opacity:0;
  margin:0;
  transition: all 0.3s cubic-bezier(.36,-0.64,.24,1.76);
  

}
50%{
  opacity: 1;
  margin: 2px 0;
  transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);

}
100%{
  opacity: 1;
  margin: 2px 0;
  transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);

}

`;
const MemberItem = styled.div`
  padding: 5px 13px;
  margin-bottom: 4px;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  // height:;
  // transform: rotateY(-90deg);
  transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
`;

const DropDown = styled.div`
  padding: 10px;
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  & div:first-child {
    font-size: 14px;
  }
`;
const anticonLeft = styled.div`
  color: #383839;
  cursor: pointer;
  font-size: 10px !important;
  transition: transform 100ms ease 0s;
`;
const avatarUser = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 22px;
  color: white;
  text-align: center;
  background-color: white;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 48px;
`;
const UserName = styled.div`
  padding-left: 10px;
  align-self: center;
`;

const ListContainer = styled.div`
  -moz-transition: height 0.5s;
  -ms-transition: height 0.5s;
  -o-transition: height 0.5s;
  -webkit-transition: height 0.5s;
  transition: height 0.5s;
  scrollbar-width: none;
  overflow-y: auto;
  min-height: 0px;
  // animation: ${ListFrame} 1s linear ;
  font-size: 14px;
  max-height: 400px;
  height: max-content;
  &::-webkit-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #776ef7 #c3c6f1;
  }
`;

const UserStatus = styled.div<Online>`
  width: 11px;
  height: 11px;
  border-radius: 100%;
  border: 2px solid white;
  background-color: ${(props)=>props.backgroundColor?props.backgroundColor:""};
  transform: translateY(-38px);
`;

export {
  GroupDescription,
  UserStatus,
  ListContainer,
  UserName,
  avatarUser,
  anticonLeft,
  DropDown,
  MemberItem,
  DesTitle,
  TitleDrop,
  DropTitle,
  GroubMedia,
  GroupName,
  TitleGroup,
  ModalBoxContainer,
  InfoHeader,
};
