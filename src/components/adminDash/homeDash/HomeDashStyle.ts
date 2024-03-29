import styled from "styled-components";
export const HomeDashDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center; 

  margin-top: 60px;
  margin-left:18% ;
  padding: 10px;
  overflow-x: hidden;
  width: 100%;
`;

export const DashHeader = styled.div`
  display: flex;
  
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
  margin-left:6px;
`;
export const HomeDashText = styled.div`
  margin: 20px;
  font-size: 20px;
  background: -webkit-linear-gradient(50deg,#5e4f91,#736fb9, #9f38d3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const HomeChart = styled.div`
  box-sizing: border-box;
  display: flex;
  width:70%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
  margin: 20px;
  padding:20px;
  border-radius:8px;
  background-color:#ffffff;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  @media only screen and (max-width: 600px) {
  width:95%;
  margin-left: 0px;


  }
`;
