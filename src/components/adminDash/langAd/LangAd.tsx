import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { Lang } from "../../../reduxstore/reducer/langreducer/langRinter";
import {
  LangContainer,
  LangDeatils,
  LangFeatures,
  LangFooter,
} from "./LangAdStyle";

import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

import PushCloud from "../cloud/PushCloud";
import { DashHeader, HomeDashText } from "../homeDash/HomeDashStyle";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { ChangeUserPic } from "../../reusable/reusableStyle";
import { useDispatch } from "react-redux";
import { CreateLang } from "../../../reduxstore/action/langaction/langCrud";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: any) => ({
  root: {
    "& .MuiButtonBase-root": {
      color: "white",
      background: "#5e4f91",
      transition: "all 0.2s ease-in",
      margin: "1px",
    },
    "&:hover .MuiButtonBase-root": {
      background: "#684aefe9",
    },
  },
  inputRoot: {
    "&.MuiOutlinedInput-root": {
      background: "transparent",
      color: "black",
    },
    "&.MuiOutlinedInput-input": {
      color: "green",
    },
    "&.Mui-focused &.MuiOutlinedInput-input": {
      color: "red",
    },
  },
}));
export let formatData: string[] = [
  "javascript",
  "java",
  "cpp",
  "typescript",
  "cshtml",
  "css",
  "python",
];
function LangAd() {
  const dispatch = useDispatch();
  const [language, setLanguage] = useState<Lang>({
    picture: "",
    format: [],
    description: "",
    lang: "",
  });
  const classes = useStyles();

  const pushImage = (e: any, type: string, value: string) => {
    setLanguage((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const handlertext = (e: any) => {
    setLanguage((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <LangContainer>
      <DashHeader  >
        <LibraryAddIcon
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
        <HomeDashText>Create Language</HomeDashText>
      </DashHeader>
      <LangDeatils>
        <LangFeatures>
          <TextField
            label="Name"
            name="lang"
            variant="standard"
            style={{ marginBottom: "15px", marginTop: "10px", width: "250px" }}
            onChange={(e) => handlertext(e)}
          />
          <Autocomplete
              classes={classes}

          disablePortal
          onChange={(event, newValue) => {
            setLanguage((prev) => ({
              ...prev,
              format: newValue,
            }));
          }}
          sx={{ width: "250px", margin: "10px 0px" }}
          options={formatData}
          multiple={true}
          renderInput={(params) => <TextField {...params} label="Formates" />}
        />
           {/* <AutoComLang
              // setState={addLanguage}
              multiple={false}
              label={"Format"}
            // style={{ marginBottom: "20px", width: "250px" }}

            // onChange={(e) => handlertext(e)}

            /> */}
          {/* <TextField
            label="Format"
            name="format"
            variant="standard"
          /> */}

          <TextField
            label="Description"
            name="description"
            variant="standard"
            style={{ marginBottom: "15px", width: "250px" }}
            onChange={(e) => handlertext(e)}
          />
           <PushCloud
            name={"picture"}
            change={pushImage}
            desc={"set image for language"}
          />
        </LangFeatures>
        <LangFeatures style={{
  marginLeft:"0%",

        }}>
          {/* <SketchPicker
            color={language.background}
            onChange={(color: any) => {
              setLanguage((prev) => ({ ...prev, background: color.hex }));
            }}
          /> */}
          
        </LangFeatures>
      </LangDeatils>
      <LangFooter>
     
        <ChangeUserPic
          onClick={() => {
            dispatch(CreateLang(language));
          }}
          style={{
            margin:"20px auto",

          }}
        >
          Create Language
        </ChangeUserPic>
      </LangFooter>
    </LangContainer>
  );
}

export default LangAd;
