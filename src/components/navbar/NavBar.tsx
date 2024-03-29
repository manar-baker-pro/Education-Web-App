import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../reduxstore/action/useraction/userAsine";
import { RootState } from "../../reduxstore/store";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { ProfileItem } from "./NavBarStyle";
import UserModel from "../userDash/userModel";
import test from "../../images/AV3.png";
// import { UserProfile } from "../../reduxstore/reducer/usereducer/authreducer/userRinter";
import { NavBarBody, NavInfo, NavLinks, Navele, NavImg } from "./NavBarStyle";
import { Logo } from "../reusable/reusableStyle";
import Exit from "@material-ui/icons/ExitToAppOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import { AuthorizeShow } from "../../routes/AuthRoute";
import { ApiEnum, ComponentName } from "../../routes/Authorize";
import "./navbar.css";
function NavBar() {
  const useSign = useSelector((state: RootState) => state.userSign);
  const { userInfo } = useSign;
  const dispatch = useDispatch();
  const [openModal, setModal] = useState(false);
  const [openList, setOpenList] = useState(false);



  const closChild = () => {
    setModal(false);
  };
  const openChild = () => {
    setModal(true);
  };

  const sigout = () => {
    dispatch(Logout());
  };
  const location = useLocation();
  const [navbar, setNavbar] = useState("");
if (location.pathname.includes('chating'))return null;

  return (
    <>
      <NavBarBody Location={navbar}>
        <NavInfo>
          {userInfo && Object.keys(userInfo).length > 0 ? (
            <>
              <>
                <NavLinks to="/">
                  <Logo />
                </NavLinks>

                <Navele IsDropDownRes={openList ? true : false}>
                  <>
                    <AuthorizeShow
                      componentNa={ComponentName.AdminDash}
                      callVerb={ApiEnum.GET}
                    >
                      <NavLinks
                        opacity={openList ? "1" : "0"}
                        zindex={openList ? "1" : "-1"}
                        to={"/"}
                        fontSize="0.9em"
                        style={{ margin: "10px" }}
                        onClick={() => {
                          setOpenList(false);
                        }}
                      >
                        Home
                      </NavLinks>
                    </AuthorizeShow>
                    <AuthorizeShow
                      componentNa={ComponentName.Conversation}
                      callVerb={ApiEnum.GET}
                    >
                      <NavLinks
                        opacity={openList ? "1" : "0"}
                        zindex={openList ? "10" : "-1"}
                        to={"/chating"}
                        fontSize="0.9em"
                        onClick={() => {
                          setOpenList(false);
                        }}
                        style={{ margin: "10px" }}
                      >
                        Chating
                      </NavLinks>
                    </AuthorizeShow>
                    <AuthorizeShow
                      componentNa={ComponentName.AdminDash}
                      callVerb={ApiEnum.GET}
                    >
                      <NavLinks
                        opacity={openList ? "1" : "0"}
                        zindex={openList ? "10" : "-1"}
                        to={"/admindash"}
                        fontSize="0.9em"
                        onClick={() => {
                          setOpenList(false);
                        }}
                        style={{ margin: "10px" }}
                      >
                        DashBoard
                      </NavLinks>
                    </AuthorizeShow>
              
                
                  </>
                </Navele>
              </>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <span className="iconStyle">
                  <NotificationsActiveOutlinedIcon
                    style={{
                      color: "gray",
                      cursor: "pointer",
                      fontSize: "24px",
                      marginTop: "8px",
                    }}
                  />
                </span>
                <ProfileItem
                  style={{
                    display: "flex",
                    margin: "10px 0px",
                  }}
                  onClick={() => {
                    openChild();
                    setOpenList(false);
                  }}
                >
                  <NavImg src={userInfo.picture} style={{ cursor: "pointer" }} />
                </ProfileItem>
                <Navele
                  onClick={() => {
                    sigout();
                    setOpenList(false);
                  }}
                  style={{ margin: "0px" }}
                >
                  <span className="iconStyle">
                    <Exit
                      style={{
                        color: "gray",
                        cursor: "pointer",
                        fontSize: "24px",
                        marginTop: "7px",
                      }}
                    />
                  </span>
                </Navele>

                <span className="iconMenue">
                  <MenuOpenRoundedIcon
                    onClick={() => {
                      setOpenList(!openList);
                    }}
                    style={{
                      color: "gray",
                      cursor: "pointer",
                      fontSize: "24px",
                      marginTop: "7px",
                    }}
                  />
                </span>
              </div>
            </>
          ) : (
            <>
              <NavLinks to="/">
                <Logo />
              </NavLinks>
              <div style={{ display: "flex", justifyContent: "flex-end",minHeight:'60px' }}>
                <NavLinks to="/signin">Sign in</NavLinks>
                <NavLinks to="/signup">Register</NavLinks>
              </div>
            </>
          )}
        </NavInfo>
      </NavBarBody>
      {openModal && <UserModel openModal={openModal} closeModal={closChild} />}
    </>
  );
}

export default NavBar;
