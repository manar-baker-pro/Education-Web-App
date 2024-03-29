import styled from "styled-components";
interface Chapter {
  backgroundColor?: string;
  Color?: string;
}
const LectureBody = styled.div`
  display: flex;
  flex-direction: column;
// align-items:center;
  margin-top: 80px;
  margin-left:18% ;

  padding: 10px;
  height:max-content;
  /* @media only screen and (max-width: 700px) {
    margin-left: 25%;
  }
  @media only screen and (max-width: 590px) {
    margin-left: 35%;
  } */
  width: 100%;
  overflow-x: hidden;
  @media only screen and (max-width: 590px) {

  margin-left: 10%;
  }
`;
const LectureContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;
const ChapterTextArea = styled.textarea<Chapter>`
  resize: none;
  min-height: 300px;
  width: 100%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "rgb(40, 44, 52)"};
  color: ${(props) => (props.Color ? props.Color : "white")};
  padding: 20px;
  margin: 10px 10px;
  font-size: 1.1em;

  border: none;
  &:focus {
    outline: none;
  }
  /* width: 100%; */
  @media only screen and (max-width: 590px) {
    width: 80%;
  }
`;
const CloudInput = styled.input`
  display: none;
`;
const SelectChoice = styled.select`
  overflow-y: auto;
  background: linear-gradient(190deg, #da8cff, #9a55ff);
  color: black;
  padding: 10px 20px;
  font-size: 1em;

  border-radius: 5px;
  margin: 20px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
const OptionValue = styled.option``;
const InputVideo = styled.input`
  display: flex;
  padding: 10px 15px;
  margin: 10px;
`;
const ContainerSlide = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#ffff;
  margin-top:20px;
  padding:20px 10px;
  flex-wrap:wrap;
  border-radius: 10px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2);
  width: 85%;

  @media only screen and (max-width: 600px) {
  width: 98%;

  }
`;
const ContainerCom = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:"40%";
@media only screen and (max-width: 600px) {
  width: 98%;

  }
`;

export {
  LectureContent,
  ChapterTextArea,
  ContainerCom,
  LectureBody,
  SelectChoice,
  OptionValue,
  InputVideo,
  CloudInput,
  ContainerSlide,
};
