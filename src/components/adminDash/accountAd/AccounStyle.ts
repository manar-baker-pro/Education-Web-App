import styled from "styled-components";
const AccountDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 60px;
  overflow-x: hidden;
  align-items: center;
  margin-left: 5%;
  width: 100%;
  padding: 20px;
  @media only screen and (max-width: 600px) {
    margin-left: 10%;
  }
`;
const AccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px;
  margin: 20px 30px;
  background-color: #fff;
  border-radius: 10px;
  width: 45%;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin: 0px;
    margin-top:10px;
  }
`;
const ContainerAc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 60%;
  border: 2px solid #cbafe3;
  @media only screen and (max-width: 600px) {
    width: 100%;
  
  }
`;
export { AccountDiv, AccountInfo, ContainerAc };
