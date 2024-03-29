import styled from "styled-components";
const ChapterContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 20px;
  @media only screen and (max-width: 600px) {
  padding-left: 10vw;
  }
`;
const TitleLecture = styled.div`
  // position: "fixed",
  /* margin-top:10px; */
  display: flex;
  backdrop-filter:blur(900px);
  align-items: center;
  // justifyContent: "space-around",
  padding: 0px 20px;
  @media only screen and (max-width: 600px) {
    padding-left:10vw;
    font-size:14px;

  }
`;


const ChapterText = styled.div`
  min-height: 200px;
  padding: 10px;
  word-spacing: 8px;
  margin-top: 10px;
  background-color: #ffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  white-space: pre-wrap;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    max-width: 95vw;
  }
`;

const ChapterCode = styled.div`
  min-height: 200px;
  padding: 10px;
  margin-top: 10px;
  background-color: rgb(40, 44, 52);
  word-spacing: 10px;
  white-space: pre-wrap;
  color: white;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    max-width: 95vw;
  }
`;

const ChapterImage = styled.img`
  /* height: 100%; */
`;

export { ChapterContent, ChapterText, ChapterCode,TitleLecture, ChapterImage };
