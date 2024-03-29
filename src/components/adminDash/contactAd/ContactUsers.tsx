import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reduxstore/store";
import ScrollerCom from "../../reusable/scroller/ScrollerCom";
import {
  ClearUserPage,
  GetUsers,
} from "../../../reduxstore/action/useraction/userDashAc";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./ContactAdStyle.css";
import IteratUser from "./IteratUser";
import axios, { CancelTokenSource } from "axios";
import { TextField } from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { CreateConversationInter } from "../../../reduxstore/reducer/contactreducer/conversation/converRinter";
import { UserSearchPage } from "../../../reduxstore/reducer/usereducer/authreducer/userRinter";

let cancelToken: CancelTokenSource;
interface ManageLanguage {
  setconversation: React.Dispatch<
    React.SetStateAction<CreateConversationInter>
  >;
  language: string;
  members: UserSearchPage[];
}
function ContactUsers({ setconversation, language, members }: ManageLanguage) {
  const dispatch = useDispatch();
  const UserRed = useSelector((state: RootState) => state.userDash);
  const { userspage, currentPageUser, hasMoreUsers, userdashload } = UserRed;
  const [myMap, setMyMap] = useState(new Map());

  const [filter, setfilter] = useState("");
  const clear = useCallback(() => {
    setconversation((prev: any) => {
      let members: [] = [];
      return { ...prev, members };
    });
    setMyMap(new Map());
  }, [setconversation, setMyMap]);
  useEffect(() => {
    let mount = true;
    if (language) {
      if (mount) {
        clear();
      }
      const searchTerm = `?filterName=${filter}&page=${1}&language=${language}`;

      if (cancelToken) {
        cancelToken.cancel("Operation canceled due to new request.");
      }
      cancelToken = axios.CancelToken.source();

      dispatch(GetUsers(searchTerm, cancelToken));
    }
    return () => {
      mount = false;
      dispatch(ClearUserPage());
    };
  }, [language, dispatch, clear]);

  const handleSearchChange = (e: any) => {
    setfilter(e.target.value);
    if (language) {
      dispatch(ClearUserPage());
      const searchTerm = `?filterName=${
        e.target.value
      }&page=${1}&language=${language}`;
      if (cancelToken) {
        cancelToken.cancel("Operation canceled due to new request.");
      }
      cancelToken = axios.CancelToken.source();

      dispatch(GetUsers(searchTerm, cancelToken));
    }
  };
  const updateMap = (k: any) => {
    if (myMap.get(k._id)) {
      setconversation((prev: any) => {
        let members = prev.members.filter((mem: any) => {
          return mem._id !== k._id;
        });
        return { ...prev, members };
      });
      setMyMap(new Map(myMap.set(k._id, false)));
    } else {
      setconversation((prev: any) => {
        let members = [...prev.members, k];
        return { ...prev, members };
      });
      setMyMap(new Map(myMap.set(k._id, true)));
    }
  };
  return (
    <>
      <ScrollerCom
        fetch={GetUsers(
          `?filterName=${filter}&page=${currentPageUser}&language=${language}`,
          cancelToken
        )}
        hasMore={hasMoreUsers}
        htmlElem={"showus"}
        inverse={false}
        loading={userdashload}
        pageNumber={currentPageUser}
      />

      <div className="listofusers" id="showus">
        <div className="searchBarUser">
          <div className="searchheader">
            <PersonSearchIcon style={{ position: "relative", top: "10px" }} />
            <TextField
              label="find user"
              name="title"
              type={"search"}
              variant="standard"
              style={{ margin: "10px 20px", borderBottom: "1px solid white" }}
              sx={{ input: { color: "white" } }}
              InputLabelProps={{
                style: {
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "100%",
                  fontSize: "1rem",
                  color: "white",
                },
              }}
              onChange={(e) => {
                handleSearchChange(e);
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexWrap: "wrap",
              flexDirection: "row",
              padding: "5px",
            }}
          >
            <TransitionGroup component="ul" className="util">
              {members?.map((user) => {
                return (
                  <CSSTransition
                    key={user._id}
                    timeout={700}
                    classNames="selected"
                    className="selected"
                  >
                    <li
                      style={{ position: "relative", cursor: "pointer" }}
                      onClick={() => updateMap(user)}
                    >
                      <img
                        className="userimage"
                        src={user.profilePic}
                        alt="user"
                      />
                      <div className="overlayImage"></div>

                      <p style={{ padding: "10px" }}>{user.name}</p>
                    </li>
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
          </div>
        </div>

        {userspage?.map((us) => {
          return (
            <IteratUser
              us={us}
              //  setconversation={props.setconversation}
              key={us._id}
              setItem={updateMap}
              myMap={myMap}
            />
          );
        })}
      </div>
    </>
  );
}

export default ContactUsers;
