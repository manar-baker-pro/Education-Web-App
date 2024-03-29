import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetLangs } from "../../reduxstore/action/langaction/langCrud";
import { RootState } from "../../reduxstore/store";
import beeJs from "../../images/react.png";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import {
  SlideHead,
  SlidLang,
  SlideLink,
  ButtonService,
  SlideLangImage,
  ImageStyle,
  SlideLangCon,
  SideBeeContainer,
  ParaLang,
} from "./HomeStyle";
interface LangSh {
  scroll: React.RefObject<HTMLDivElement>;
}
function LangShower({ scroll }: LangSh) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetLangs());
  }, [dispatch]);
  const LangRed = useSelector((state: RootState) => state.lanGuage);
  const { langDa } = LangRed;
  return (
    <SlideLangCon ref={scroll}>
      {langDa?.map((lan, index) => {
        return (
          <SlidLang
            backgroundColor="#e6dbf4"
            key={lan._id}
            style={{ flexDirection: index % 2 ? "row" : "row-reverse" }}
          >
            <SlideLangImage
              style={{
                backgroundColor: index % 2 ? "rgb(32, 6, 72)" : "#655397",
                position: "relative",
              }}
            >
              <SideBeeContainer
              
              >
                <SlideHead
                  fontSize="clamp(1.7rem, 2.9vw, 3.1rem)"
                  style={{
                    color: "#e6dbf4",
                    width: "max-content",
                  }}
                >
                  {lan.lang}
                </SlideHead>
                <ImageStyle src={beeJs} alt="not found" />
              </SideBeeContainer>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <ParaLang>
                  {lan.description}

                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <ButtonService right= "-100.9px" top= "-47px" rightRes= "11px" topRes= "-47px" >
                      <SlideLink
                        to={`/lang/${lan._id}`}
                        state={{
                          lan: lan,
                        }}
                      >
                        <span>
                          <LocalLibraryRoundedIcon
                            style={{ color: "#655397" }}
                          />
                        </span>
                      </SlideLink>
                    </ButtonService>
                    <ButtonService  right="-38px" top="-48px" rightRes= "58.9px" topRes= "-47px">
                      <SlideLink to={`/question/${lan.lang}`}>
                        <span>
                          <QuizRoundedIcon style={{ color: "#655397" }} />
                        </span>
                      </SlideLink>
                    </ButtonService>
                    <ButtonService  right= "-68px" top="0px" rightRes= "106px" topRes= "-47px">
                      <SlideLink to={`/chating/${lan._id}`}>
                        <span>
                          <QuestionAnswerRoundedIcon
                            style={{ color: "#655397" }}
                          />
                        </span>
                      </SlideLink>
                    </ButtonService>
                  </div>
                </ParaLang>
              </div>
            </SlideLangImage>
          </SlidLang>
        );
      })}
    </SlideLangCon>
  );
}

export default LangShower;
