import styled from "styled-components";
const LangContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  width: 100%;
  @media only screen and (max-width: 600px) {
  margin-left: 0px;
  width: 100vw;

  }
`;
const LangDeatils = styled.div`
  display: flex;
  flex-direction: row;
  background-color:#ffff;
  flex-wrap: wrap;

  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
padding:20px;
border-radius:10px;
  justify-content: center;
  align-items:center;
  width:32%;
  @media only screen and (max-width: 600px) {
    width:70%;
 

  }
`;
const LangFeatures = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const LangFooter = styled.div`
  display: flex;
  width:100%;
  justify-content: center;
`;
export { LangContainer, LangDeatils, LangFeatures, LangFooter };
