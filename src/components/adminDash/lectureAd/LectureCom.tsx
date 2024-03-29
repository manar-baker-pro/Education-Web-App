import { useState } from "react";
import { useDispatch } from "react-redux";
import { Createlec } from "../../../reduxstore/action/lectureaction/lectureCrud";
import { Lecture } from "../../../reduxstore/reducer/lecturereducer/lectureRinter";
import AutoComLang from "../../reusable/autocomplete/AutoComLang";
import { DashHeader, HomeDashText } from "../homeDash/HomeDashStyle";
import { TypeSlide } from "./KindEnum";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import KindSlide from "./KindSlide";
import { LectureBody ,ContainerSlide,ContainerCom} from "./LectureStyle";
import { TextField } from "@mui/material";
import AutoComKind from "../../reusable/autocomplete/AutoComKind";
import { ChangeUserPic } from "../../reusable/reusableStyle";

function LectureAd() {
  const dispatch = useDispatch();

  const [lec, setlec] = useState<Lecture>({
    slides: [
    ],
    language: "",
    title: "",
  });

  const createSlide = () => {
    setlec((prev) => ({
      ...prev,
      slides: [
        ...prev.slides,
        {
          content: "",
          kind: TypeSlide.Code,
          format:""
        },
      ],
    }));
  };
  const addLanguage = (newvalue: any) => {
    setlec((prev) => ({ ...prev, language: newvalue?._id || "" }));
  };

  const createlecture = () => {
    dispatch(Createlec(lec));
  };
  const changeType = (value: string, index: number) => {
    setlec((prev) => {
      const slides = [...prev?.slides];
      slides[index] = { ...slides[index], kind: value };
      return { ...prev, slides };
    });
  };

  const changeFormate = (value: string, index: number) => {
    setlec((prev) => {
      const slides = [...prev?.slides];
      slides[index] = { ...slides[index], format: value };
      return { ...prev, slides };
    });
  };
  return (
    <LectureBody>
      <DashHeader>
        <MenuBookIcon
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
        <HomeDashText>Create Lecture</HomeDashText>
      </DashHeader>

      <div
        style={{
          display: "flex",
          width: "90%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexWrap:"wrap",

        }}
      >

        <ContainerCom>
          
        <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop:"10px",
              padding:"10px",
              border:"2px solid #cbafe3",
              width:"100%",
            }}
          >
            <AutoComLang
              setState={addLanguage}
              multiple={false}
              label={"Language"}
              fromlecture={true}
            />

            <TextField
              label="title"
              name="title"
              variant="standard"
              style={{ marginBottom: "20px", width: "250px" }}
              onChange={(e) =>
                setlec((prev) => ({ ...prev, [e.target.name]: e.target.value }))
              }
            />
            </div>


        {lec.slides?.map((el, index) => {
          return (
            <ContainerSlide
   
              key={index}
            >

                <AutoComKind setState={changeType} index={index} />


              <KindSlide
                index={index}
                setlec={setlec}
                kind={el.kind}
                value={el.content}
                changeFormate={changeFormate}
              />

            </ContainerSlide>
          );
          
        })}
                <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop:"10px",
              // backgroundColor: "red",
              padding:"10px",
              border:"2px solid #cbafe3",

            width:"100%",
            }}
          >
 

              <ChangeUserPic onClick={() => createSlide()}>
                Add Slide
              </ChangeUserPic>
              <ChangeUserPic onClick={() => createlecture()}>
                Create Lecture
              </ChangeUserPic>
  
         </div>
      </ContainerCom>

        </div>


    </LectureBody>
  );
}

export default LectureAd;
