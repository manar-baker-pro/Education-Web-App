import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppendSlides,
  GetSlides,
} from "../../../reduxstore/action/lectureaction/lectureCrud";
import { Lecture } from "../../../reduxstore/reducer/lecturereducer/lectureRinter";
import { RootState } from "../../../reduxstore/store";
import FooterPagination from "../../adminDash/pagination/FooterPagination";
import ChapterKind from "./ChapterKind";
import { ChapterContent ,TitleLecture} from "./ChapterStyle";
const Chapters: FC<{ currentLecture: Lecture | null; lang: any }> = ({
  currentLecture,
  lang,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentLecture) {
      dispatch(GetSlides(currentLecture._id!));
    }
    return () => {
      setCurrentPage(1);
    };
  }, [currentLecture, dispatch]);
  const LecRed = useSelector((state: RootState) => state.lecTure);
  const { slidDa, lecDa, currentSlides, pageSizeSlide } = LecRed;

  useEffect(() => {
    if (currentLecture) {
      dispatch(AppendSlides(currentPage));
    }
  }, [currentLecture, currentPage, dispatch]);

  if (currentLecture) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          // justifyContent: "center",
        }}
      >
      
          <TitleLecture>
          <h3 style={{ marginRight: "10px", padding: "10px" }}>
            {lang?.state?.lan.lang}
          </h3>
          <div style={{ wordBreak: "break-word",textTransform:"capitalize" ,display: "flex" }}>
            {currentLecture.title}
          </div>
          </TitleLecture>
     
        <ChapterContent>
          {currentSlides?.map((slid) => {
            return (
              <ChapterKind
                slideContent={slid.content}
                key={slid._id}
                slideKind={slid.kind}
                lang={lang}
                color={slid.format}
              />
            );
          })}
        </ChapterContent>
        <FooterPagination
          currentPage={currentPage}
          totalCount={slidDa.length}
          pageSize={pageSizeSlide}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    );
  } else if (lecDa && lecDa.length > 0)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <h3
          style={{
            background: "rgb(66, 22, 210)",
            padding: "0px 20px",
            borderRadius: "8px",
            color: "white",
            // marginTop:"20%",
            fontFamily: "Amita",
          }}
        >
          Select lecture
        </h3>
      </div>
    );
  else return <></>;
};

export default Chapters;
