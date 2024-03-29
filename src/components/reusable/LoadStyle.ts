import styled, { keyframes } from "styled-components";
// import { Keyframes } from "@emotion/react";
const LoadCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 101;
  height: 100%;
  width: 100%;
  position: fixed;
  top:0;
  backdrop-filter: blur(4px);
 
`;
const Loader = styled.div`
position: absolute;
top: calc(50% - 32px);
left: calc(50% - 32px);
width: 100px;
height: 100px;
border-radius: 50%;
perspective: 800px;`;
const Rotate1 = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
`;
const Rotate2 = keyframes`
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
`;
const Rotate3 = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
`;
const LoadInner1 = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  left: 0%;
  top: 0%;
  animation: ${Rotate1} 1s linear infinite;
  border-bottom: 8px solid #6c13fe;
`;
const LoadInner2 = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  right: 0%;
  top: 0%;
  animation:  ${Rotate2} 1s linear infinite;
  border-right: 8px solid #6c13fe;
`;
const LoadInner3 = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  right: 0%;
  bottom: 0%;
  animation:  ${Rotate3} 1s linear infinite;
  border-top: 8px solid #6c13fe;
`;


export { LoadCont ,Loader,LoadInner1,LoadInner2,LoadInner3};
