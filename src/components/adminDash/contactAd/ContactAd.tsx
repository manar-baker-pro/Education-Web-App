import "./ContactAdStyle.css";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { CreateConversationInter } from "../../../reduxstore/reducer/contactreducer/conversation/converRinter";
import { AccountDiv, AccountInfo } from "../accountAd/AccounStyle";
import { DashHeader, HomeDashText } from "../homeDash/HomeDashStyle";
import GroupsIcon from "@mui/icons-material/Groups";
import { ChangeUserPic } from "../../reusable/reusableStyle";
import { CreateConversation } from "../../../reduxstore/action/contacta/conversation/convACrud";
import ContactUsers from "./ContactUsers";
import AutoComLang from "../../reusable/autocomplete/AutoComLang";
import PushCloud from "../cloud/PushCloud";

function ContactAd() {
  const dispatch = useDispatch();
  const [conversation, setconversation] = useState<CreateConversationInter>({
    title: "",
    members: [],
    picture: "",
    language: "",
  });

  const updateConverstion = (e: any) => {
    setconversation((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlecreateconv = () => {
    dispatch(CreateConversation(conversation));
  };
  const setLanguage = (newValue: any) => {
    setconversation((prev) => ({
      ...prev,
      language: newValue && newValue._id ? newValue._id : "",
    }));
  };
  const pushImage = (e: any, type: string, value: string) => {
    setconversation((prev) => ({ ...prev, [e.target.name]: value }));
  };

  return (
    <AccountDiv>
      <DashHeader style={{alignSelf:"flex-start"}}>
        <GroupsIcon
          style={{
            fontSize: "2.4em",
            padding: "10px",
            color: "white",
            borderRadius: "4px",
            marginLeft: "2px",
            background: "linear-gradient(90deg,#da8cff,#9a55ff)",
            boxShadow: "0 3px 8.3px 0.7px rgb(163 93 255 / 35%)",
          }}
        />
        <HomeDashText>Create Group</HomeDashText>
      </DashHeader>
      <div className="containerContact"
      
      >
        <AccountInfo style={{marginBottom:"10px"}}>
          <AutoComLang
            setState={setLanguage}
            multiple={false}
            label={"Language"}
          />
          <TextField
            label="Title"
            name="title"
            variant="standard"
            style={{ margin: "10px" }}
            onChange={(e) => {
              updateConverstion(e);
            }}
          />
          <PushCloud
            name={"picture"}
            change={pushImage}
            desc={"select image"}
          />
        </AccountInfo>

        <ContactUsers
          setconversation={setconversation}
          language={conversation.language}
          members={conversation.members}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center",marginTop:"10px" }}>
        <ChangeUserPic
          onClick={() => {
            handlecreateconv();
          }}
        >
          Create Group
        </ChangeUserPic>
      </div>
    </AccountDiv>
  );
}

export default ContactAd;

/* {langDa && langDa.length > 0 ? (
            <Autocomplete
              disablePortal
              onChange={(event, newValue) => {
                setconversation((prev) => ({
                  ...prev,
                  language: newValue && newValue._id ? newValue._id : "",
                }));
              }}
              id="combo-box-demo"
              sx={{ minWidth: "200px", marginBottom: "10px" }}
              options={langDa}
              getOptionLabel={(option) => option.lang}
              isOptionEqualToValue={(option: Lang, value: Lang) =>
                option.lang === value.lang
              }
              renderInput={(params) => (
                <TextField {...params} label="Language" />
              )}
            />
          ) : (
            ""
          )} */
