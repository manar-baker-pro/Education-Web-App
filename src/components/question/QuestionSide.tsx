import { useEffect, useState } from "react";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import {
  ClearAnswer,
  Getques,
} from "../../reduxstore/action/questionaction/questionCrud";
import {
  SideBarBody,
  SideItem,
  // SideLogoBody,
  // SideNav,
  SideShowOrHide,
} from "../adminDash/sideBar/SideBarStyle";
import { useDispatch, useSelector } from "react-redux";
import { Logo } from "../reusable/reusableStyle";
import { useParams } from "react-router-dom";
import { RootState } from "../../reduxstore/store";
import { ChapterNo } from "../proglang/ProStyle";
//import { Question } from "../../reduxstore/reducer/questionreducer/questionRinter";
interface CurrentField {
  setindex: Function;
  currentindex: number;
}
function QuestionSide({ setindex, currentindex }: CurrentField) {
  const dispatch = useDispatch();
  let lang = useParams();
  const QueRed = useSelector((state: RootState) => state.quesTion);
  const { questionsDa } = QueRed;
  useEffect(() => {
    if (lang && lang.idlang) {
      dispatch(Getques(lang.idlang));
    }
  }, [lang, dispatch]);
  const [toggle, settoggle] = useState<boolean>(false);
  return (
    <SideBarBody style={{paddingTop:"50px"}} toggle={toggle}>
       <SideItem>
        <Logo  style={{left:"40px",top:"30px"}}/>

        </SideItem>
      <SideItem style={{flexDirection:"row-reverse",justifyContent:"center",}}>
        {toggle ? (
          <FirstPageIcon
            style={{ color: "gray", cursor: "pointer" ,marginLeft:"60px"}}
            onClick={() => settoggle(!toggle)}
          />
        ) : (
          <LastPageIcon
            style={{
              color: "gray",
              cursor: "pointer",
            }}
            onClick={() => settoggle(!toggle)}
          />
        )}
        <SideShowOrHide style={{width:"max-content",paddingLeft:"45px",fontWeight:"500"}} toggle={toggle}>Quiz</SideShowOrHide>
      </SideItem>

      {questionsDa &&
        questionsDa.map((qu, index) => {
          return (
            <ChapterNo
              active={currentindex === index}
              key={index}
              onClick={() => {
                dispatch(ClearAnswer());
                setindex(index);

              }}
              style={{display:"flex",justifyContent:"center"}}
            >
              <SideShowOrHide toggle={toggle}>Question</SideShowOrHide>
              <h2 style={{marginLeft:"10px",fontWeight:"500",fontSize:"14px"}}> {index + 1}</h2>
            </ChapterNo>
          );
        })}
    </SideBarBody>
  );
}

export default QuestionSide;
