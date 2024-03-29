import CHATMEMBERS from "./chatMembers";
import {
  TitleGroup,
  GroupDescription,
  GroubMedia,
  GroupName,
  DesTitle,
  InfoHeader,
  ModalBoxContainer,
} from "./ModalStyle";
const MODALBox = (props: any) => {
  return (
    <>
      <ModalBoxContainer >
        <InfoHeader>
          <TitleGroup>GROUP INFO</TitleGroup>
          <div style={{ display: "flex", paddingTop: "40px" }}>
            {props.AvatarLang}
            <GroupName>{props.lang}</GroupName>
          </div>
        </InfoHeader>
        <GroupDescription>
          Java is a popular programming language,It is used for Mobile
          applications,Desktop applications Web applications.
          <DesTitle>Bio</DesTitle>
        </GroupDescription>
        <GroubMedia>
          <CHATMEMBERS />
        </GroubMedia>
      </ModalBoxContainer>
    </>
  );
};
export default MODALBox;
