import {
  SideBarBody,
  SideShapeBody,
  SideLogoBody,
  SideItem,
  SideShowOrHide,
  SideImage,
  SideNav,
  SpanItem,
} from "./SideBarStyle";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import HomeOutlines from "@material-ui/icons/Home";
import { Logo } from "../../reusable/reusableStyle";

import QuizIcon from "@mui/icons-material/Quiz";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupsIcon from "@mui/icons-material/Groups";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { useState } from "react";
import { ApiEnum, ComponentName } from "../../../routes/Authorize";
import { AuthorizeShow } from "../../../routes/AuthRoute";
function SideBar() {
  const [toggle, settoggle] = useState<boolean>(false);
  const changetog = () => {
    settoggle(!toggle);
  };
  return (
    <SideBarBody toggle={toggle}>
      <SideShapeBody>
        {toggle ? (
          <FirstPageIcon
            style={{ color: "gray", cursor: "pointer", marginTop: "18px" }}
            onClick={() => changetog()}
          />
        ) : (
          <LastPageIcon
            style={{
              color: "gray",
              cursor: "pointer",
              marginTop: "20px",
            }}
            onClick={() => changetog()}
          />
        )}
      </SideShapeBody>
      <SideLogoBody>
        <SideItem>
          <SideShowOrHide toggle={toggle}>
            {/* <SideImage src={header} /> */}
            <Logo style={{ left: "40px", top: "30px" }} />
          </SideShowOrHide>
        </SideItem>
        <AuthorizeShow componentNa={ComponentName.User} callVerb={ApiEnum.GET}>
          <SideNav end to="/admindash/static">
            <SideItem>
              <SpanItem
               
              >
                <HomeOutlines
                  style={{
                    fontSize: "1.4em",
                  }}
                />
              </SpanItem>
              <SideShowOrHide toggle={toggle}>Dashboard</SideShowOrHide>
            </SideItem>
          </SideNav>
        </AuthorizeShow>

        <SideNav end to="/admindash/lecture">
          <SideItem>
            <SpanItem
          
            >
              <MenuBookIcon
                style={{
                  fontSize: "1.4em",
                }}
              />
            </SpanItem>
            <SideShowOrHide toggle={toggle}> Add Lecture</SideShowOrHide>
          </SideItem>
        </SideNav>

        <SideNav end to="/admindash/question">
          <SideItem>
            <SpanItem
           
            >
              <QuizIcon
                style={{
                  fontSize: "1.4em",

                  // marginRight: "10px",
                }}
              />
            </SpanItem>
            <SideShowOrHide toggle={toggle} style={{ color: "inherit" }}>
              Add Exerice
            </SideShowOrHide>
          </SideItem>
        </SideNav>
        <AuthorizeShow componentNa={ComponentName.User} callVerb={ApiEnum.POST}>
          <SideNav end to="/admindash/account">
            <SideItem>
              <SpanItem
           
              >
                <SupervisorAccountIcon
                  style={{
                    fontSize: "1.4em",
                  }}
                />
              </SpanItem>
              <SideShowOrHide toggle={toggle} style={{ color: "inherit" }}>
                {" "}
                Add Acounts
              </SideShowOrHide>
            </SideItem>
          </SideNav>
        </AuthorizeShow>
        <AuthorizeShow
          componentNa={ComponentName.Conversation}
          callVerb={ApiEnum.POST}
        >
          <SideNav end to="/admindash/conver">
            <SideItem>
              <SpanItem
           
              >
                <GroupsIcon
                  style={{
                    fontSize: "1.4em",
                  }}
                />
              </SpanItem>
              <SideShowOrHide toggle={toggle} style={{ color: "inherit" }}>
                Add Group
              </SideShowOrHide>
            </SideItem>
          </SideNav>
        </AuthorizeShow>
        <AuthorizeShow
          componentNa={ComponentName.Language}
          callVerb={ApiEnum.POST}
        >
          <SideNav end to="/admindash/language">
            <SideItem>
              <SpanItem
               
              >
                <LibraryAddIcon
                  style={{
                    fontSize: "1.4em",
                  }}
                />
              </SpanItem>
              <SideShowOrHide toggle={toggle} style={{ color: "inherit" }}>
                Add Language
              </SideShowOrHide>
            </SideItem>
          </SideNav>
        </AuthorizeShow>
      </SideLogoBody>
    </SideBarBody>
  );
}

export default SideBar;
