import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalQues = createGlobalStyle`
  body {
    margin: 0;

    box-sizing: border-box;

  	background-color: #eef5fd;	

  }
`;

const quesanimation = keyframes`

50%{  
    transform: translate(0, 20px);
 
  }
`;
const optionfly = keyframes`

  /* 20% {
    transform: translateX(-2vw);
    opacity: 0.2;
  }
  50% {
    transform: translateX(-1vw);
    opacity: 0.5;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  } */
  0% {
    transform: translateX(-4vw);
opacity: 0.2;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }

`;
const QuestionesGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 70px;
  box-sizing: border-box;
`;
const QuestionNumber = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid green;
  margin: 5px;
`;
const QuestionHeader = styled.div`
  position: relative;
  background: white;
  border-radius: 8px;
  box-shadow: 2px 6px 20px 2px rgba(6, 6, 6, 0.15);
  max-height: 120px;
  padding: 15px;
  width: 60vw;
  margin: 40px 0;
  overflow: hidden;
  overflow-y: auto;
  animation-iteration-count: 2;

  animation-name: ${quesanimation};
  animation-duration: 0.6s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  box-shadow: 2px 6px 20px 2px rgba(10, 10, 120, 0.15);
  width: 80%;
  clip-path: inset(0, 0, 0, 0);
`;
const ShowOption = styled.div<{ animationIndex: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: flex-start;
  transition: all 0.5s ease-out;

  /* border-radius: 10px; */
  letter-spacing: 0.05em;
  position: relative;
  animation-name: ${optionfly};
  animation-direction: normal;
  animation-timing-function: normal;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  /* visibility: hidden; */
  opacity: 0;
  animation-duration: 0.5s;
  animation-delay: ${(props) => `calc(0.4s * ${props.animationIndex} + 1.2s)`};
  /* transition: all 0.2s ease-in-out; */
  padding: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(195, 148, 252, 0.7);
  }
`;
const NumberShower = styled.div`
  display: flex;
  background-color:#5e4f91;
padding:3px 9px;
border-radius:40px;
margin:0 5px;
  align-items: center;
  font-size: 1rem;
  color:#fff;
  // margin-bottom: 5px;
`;
const QuestDsc = styled.div`
  margin-left: 10px;
  // word-spacing: ]px;
  white-space: pre-wrap;
`;
export {
  QuestionesGroup,
  QuestionHeader,
  QuestionNumber,
  OptionContainer,
  ShowOption,
  NumberShower,
  QuestDsc,
};
