
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import ONLINESTATE from "./onlineState";
import { ListContainer, TitleDrop, DropTitle, DropDown } from "./ModalStyle";
const CHATMEMBERS = () => {
 
  return (
    <>
      <DropDown>
        <DropTitle>
          <PeopleAltRoundedIcon
            style={{
              fontSize: "20px !important",
              color: "#919091",
              marginRight: "10px",
              alignSelf: "center",
            }}
          />
          <TitleDrop> Members </TitleDrop>
        </DropTitle>
      </DropDown>
      <ListContainer>
        <ONLINESTATE />
      </ListContainer>
    </>
  );
};
export default CHATMEMBERS;
