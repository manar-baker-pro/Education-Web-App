import { Autocomplete, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { Lecture } from "../../../reduxstore/reducer/lecturereducer/lectureRinter";
import { RootState } from "../../../reduxstore/store";
import PushCloud from "../cloud/PushCloud";
import { TypeSlide } from "./KindEnum";
import { makeStyles } from "@material-ui/core/styles";
import { ChapterTextArea, InputVideo } from "./LectureStyle";
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

// import { useState } from "react";
const KindSlide: React.FC<{
  kind: string;
  value: string;
  setlec: React.Dispatch<React.SetStateAction<Lecture>>;
  index: number;
  changeFormate:any
}> = ({ kind, setlec, value, index,changeFormate }) => {
  const LangRed = useSelector((state: RootState) => state.lanGuage);
  const { formateDa } = LangRed;
  const classes = useStyles();

  const updateSlide = (e: any, type?: string, value?: string) => {
    if (type === "file") {
      const { target } = e;
      setlec((prev) => {
        const slides = [...prev.slides];
        slides[index] = { ...slides[index], [target.name]: value };
        return { ...prev, slides };
      });
    } else {
      const { target } = e;
      setlec((prev) => {
        const slides = [...prev.slides];
        slides[index] = { ...slides[index], [target.name]: target.value };
        return { ...prev, slides };
      });
    }
  };

  if (kind === TypeSlide.Code) {

    return (
      <div  style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width:"100%"
      }}>
      <ChapterTextArea
        name="content"
        onChange={(e) => updateSlide(e)}
        value={value}
      />
      <Autocomplete
      classes={classes}

          disablePortal
          onChange={(event, newValue) => {
            changeFormate(newValue, index);
          }}
          
          sx={{ width: "250px", margin: "10px 0px" }}
          options={formateDa}
          isOptionEqualToValue={(option: string, value: string) =>
            option === value
          }
          multiple={false}
          clearOnBlur={true}
          renderInput={(params) => <TextField {...params} label="Formate" />}
        />
      </div>
    );
  }

  //
  else if (kind === TypeSlide.Text) {
    return (
      <ChapterTextArea
        name="content"
        onChange={(e) => updateSlide(e)}
        value={value}
        backgroundColor="#b2bdf2"
      
        Color="black"
      />
    );
  } else if (kind === TypeSlide.Image) {
    return (
      <PushCloud change={updateSlide} name="content" desc={"Choose Image"} />
    );
  } else if (kind === TypeSlide.Video) {
    return (
      <InputVideo
        name="content"
        type="url"
        placeholder="https://www.youtube.com"
        onChange={(e) => updateSlide(e)}
      />
    );
  } else return <></>;
};
export default KindSlide;
