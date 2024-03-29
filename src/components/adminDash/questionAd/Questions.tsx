import { useState } from "react";
import { useDispatch } from "react-redux";
import { Createques } from "../../../reduxstore/action/questionaction/questionCrud";
import { DashHeader, HomeDashText } from "../homeDash/HomeDashStyle";

import { Question } from "../../../reduxstore/reducer/questionreducer/questionRinter";

import {
  OptionBody,
  OptionContent,
  OptionInput,
  ProButton,
  QuestionBody,
} from "../../proglang/ProStyle";
import AutoComLang from "../../reusable/autocomplete/AutoComLang";
import QuizIcon from "@mui/icons-material/Quiz";

function Questions() {
  const dispatch = useDispatch();

  const [question, setquestion] = useState<Question>({
    description: "",
    options: [
      {
        description: "",
        isTrue: false,
      },
      {
        description: "",
        isTrue: false,
      },
      {
        description: "",
        isTrue: false,
      },
      {
        description: "",
        isTrue: false,
      },
    ],
    language: "",
  });

  const handlchange = (e: any) => {
    setquestion((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateOption = (e: any, index: number) => {
    const { target } = e;
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setquestion((prev) => {
      const options = [...prev.options];
      options[index] = { ...options[index], [name]: value };
      return { ...prev, options };
    });
  };

  const addLanguage = (newvalue: any) => {
    setquestion((prev) => ({ ...prev, language: newvalue?._id || "" }));
  };
  const submitQuestion = () => {
    dispatch(Createques(question));
  };

  return (
    <div
      style={{
        marginTop: "70px",
        marginLeft:"8% ",
        display: "flex",
        flexWrap:"wrap",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <DashHeader >
        <QuizIcon
          style={{
            fontSize: "2.4em",
            padding: "10px",
            color: "white",
            borderRadius: "4px",
            marginLeft: "2px",
            alignSelf: "center",
            background: "linear-gradient(90deg,#da8cff,#9a55ff)",
            boxShadow: "0 3px 8.3px 0.7px rgb(163 93 255 / 35%)",
          }}
        />
        <HomeDashText style={{ alignSelf: "flex-start" }}>
          Create Question
        </HomeDashText>
      </DashHeader>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
        <AutoComLang setState={addLanguage} multiple={false} label="Language" />
        <ProButton onClick={() => submitQuestion()}>Create Exersize</ProButton>
        </div>
       


        <QuestionBody name="description" onChange={(e) => handlchange(e)}
        placeholder="Enter the Question "  />
        {question.options.map((el, index) => {
          return (
            <OptionBody key={index}>
              <OptionContent
                placeholder={"Enter the option number  "+(index+1)}
                name="description"
                onChange={(e) => updateOption(e, index)}
              ></OptionContent>
              <OptionInput
                type="checkbox"
                defaultChecked={el.isTrue}
                name="isTrue"
                onChange={(e) => updateOption(e, index)}
              />
            </OptionBody>
          );
        })}


      </div>
    </div>
  );
}

export default Questions;
