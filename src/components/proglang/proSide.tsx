import { ChapterNo, SideDiv } from "./ProStyle";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxstore/store";
import { useParams } from "react-router-dom";
import { GetLecs } from "../../reduxstore/action/lectureaction/lectureCrud";
import { useEffect } from "react";
import { Logo } from "../reusable/reusableStyle";
import SidebarHoc from "../hoc/SidebarHoc";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  SideItem,
  SideLogoBody,
  SideShapeBody,
  SideShowOrHide,
} from "../adminDash/sideBar/SideBarStyle";
import { fontWeight } from "@mui/system";

const ProSide = (prop: any) => {
  const dispatch = useDispatch();
  let { prolang } = useParams();
  useEffect(() => {
    if (prolang) dispatch(GetLecs(prolang));
  }, [prolang, dispatch]);

  const LecRed = useSelector((state: RootState) => state.lecTure);
  const { lecDa } = LecRed;
  return (
    <SideDiv active={prop.toggle} tabIndex={0} onBlur={prop.close}>
      <SideShapeBody>
        <FirstPageIcon
          style={{ color: "gray", cursor: "pointer", marginTop:"10px"}}
          onClick={prop.change}
        />
      </SideShapeBody>
      <SideLogoBody>
        <SideItem>
        <Logo  style={{left:"40px",top:"50px"}}/>

        </SideItem>

        {lecDa?.map((lec,index) => {
          return (
            <SideItem key={lec._id}>
              
              <ChapterNo
                active={prop.currentLecture?._id === lec._id}
                onClick={() => {
                  prop.setcurrentLecture(lec);
                }}
              >
                <span style={{paddingRight:"10px" ,fontWeight:"500"}}> {(index+1)}</span>
               {lec.title}
              </ChapterNo>
              
            </SideItem>
          );
        })}
      </SideLogoBody>
    </SideDiv>
  );
};
const ProSideBar = SidebarHoc(ProSide);
export default ProSideBar;
