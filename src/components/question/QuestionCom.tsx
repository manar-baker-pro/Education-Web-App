import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Getoptions } from "../../reduxstore/action/questionaction/questionCrud";
import { RootState } from "../../reduxstore/store";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  QuestionesGroup,
  ShowOption,
  NumberShower,
  QuestDsc,
  GlobalQues,
} from "./QuestionComStyle";
import QuestionSide from "./QuestionSide";
import "./ReactModalCom.css";
import DecideModal from "./DecideModal";
// import PreEnterCom from "../hoc/PreEnterCom";
// import { ComponentName, ApiEnum } from "../../routes/Authorize";

function QuestionCom() {
  let lang = useParams();
  const dispatch = useDispatch();
  const [currentindex, setindex] = useState<number>(0);

  const QueRed = useSelector((state: RootState) => state.quesTion);
  const { questionsDa, answer } = QueRed;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <GlobalQues />
      <DecideModal answer={answer} />
      <QuestionSide setindex={setindex} currentindex={currentindex} />

      <QuestionesGroup>
        {questionsDa[currentindex]?.description ? (
          <TransitionGroup component="div" className="example-enter">
            {questionsDa[currentindex]?.description}
          </TransitionGroup>
        ) : (
          ""
        )}

        <TransitionGroup component="ul" className="optionUl">
          {questionsDa[currentindex]?.options?.map((op, index) => {
            return (
              <CSSTransition key={index} timeout={0}>
                <ShowOption
                  animationIndex={index}
                  style={{
                    background: answer
                      ? answer.option === op._id
                        ? answer.success
                          ? "rgba(14, 206, 14, 0.854)"
                          : "red"
                        : ""
                      : "",
                    color:
                      answer && answer.option === op._id ? "white" : "black",
                  }}
                  key={op._id}
                  onClick={() => {
                    dispatch(
                      Getoptions(
                        lang.idlang ? lang.idlang : "",
                        questionsDa[currentindex]._id!,
                        op._id!
                      )
                    );
                  }}
                >
                  <NumberShower>{String.fromCharCode(65 + index)}</NumberShower>
                  <QuestDsc>{op.description}</QuestDsc>
                </ShowOption>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </QuestionesGroup>
    </div>
  );
}

export default QuestionCom;
