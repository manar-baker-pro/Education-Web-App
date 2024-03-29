import { useState } from "react";
import Chapters from "./chapter/Chapters";
import { Prodiv, MainDiv } from "./ProStyle";
import ProSideBar from "./proSide";
import { useLocation } from "react-router-dom";
import { Lecture } from "../../reduxstore/reducer/lecturereducer/lectureRinter";
function ProLang() {
  const [currentLecture, setcurrentLecture] = useState<Lecture | null>(null);
  let s = useLocation();
  return (
    <Prodiv>
      <ProSideBar
        currentLecture={currentLecture}
        setcurrentLecture={setcurrentLecture}
      />
      <MainDiv>
        <Chapters currentLecture={currentLecture} lang={s} />
      </MainDiv>
    </Prodiv>
  );
}

export default ProLang;
