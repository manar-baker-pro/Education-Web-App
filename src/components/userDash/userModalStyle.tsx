import styled from "styled-components";
const UserPicSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffffe9;
  width: 100%;
  margin: 0;
`;
const UserPic = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 100%;
  margin-top: 20px;
`;

const UserProfileFields = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 2rem);
  margin: 10px;
`;
const UserField = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
`;

export { UserPicSec, UserPic, UserProfileFields, UserField };
