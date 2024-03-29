import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Socket } from "socket.io-client";
import {
  GetUsersInConv,
  UpdateUsersInConv,
} from "../../../reduxstore/action/useraction/userDashAc";
import avatar1 from "../../../images/AV1.jpg";
import { LangAvatar } from "../chatList/chatListStyle";
import { RootState } from "../../../reduxstore/store";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { Conversation } from "../../../reduxstore/reducer/contactreducer/conversation/converRinter";
import { UserForSerach } from "../../../reduxstore/reducer/usereducer/authreducer/userRinter";
import {
  JoinUserConversation,
  LeaveUserConversation,
} from "../../../reduxstore/action/contacta/conversation/convACrud";
import { useParams } from "react-router-dom";
import { UserStatus, UserName, MemberItem } from "./ModalStyle";
interface AsideInt {
  socket?: Socket<DefaultEventsMap, DefaultEventsMap>;
}
function ONLINESTATE({ socket }: AsideInt) {
  const dispatch = useDispatch();
  const conRed = useSelector((state: RootState) => state.ConVersation);
  const { currentChat } = conRed;
  // useEffect(() => {
  //   console.log(currentChat)
  //   if (currentChat && currentChat?.isjoined !== 0) {
  //     dispatch(GetUsersInConv());
  //   }
  // }, [currentChat, dispatch]);
  const userDashRed = useSelector((state: RootState) => state.userDash);

  const { users } = userDashRed;
  return (
    <div>
      {currentChat
        ? users?.map((use) => {
            return (
              <MemberItem key={use._id}>
                <div>
                  <LangAvatar backgrondImage={use.profilePic} />
                  <UserStatus 
                  
                   backgroundColor={use.Isonline ? "green" : "red"}
                   
                  ></UserStatus>
                </div>
                <UserName className="UserName">{use.name}</UserName>

                <div style={{ alignSelf: "center", marginLeft: "auto" }}>
                  <span>
                    <RemoveCircleOutlineOutlinedIcon
                      style={{ fontSize: "16px", cursor: "pointer" }}
                    />
                  </span>
                </div>
              </MemberItem>
            );
          })
        : ""}

    </div>
  );
}

export default ONLINESTATE;
