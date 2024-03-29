import React from "react";
import { DropBody } from "../../navbar/NavBarStyle";
import Exit from "@material-ui/icons/ExitToAppOutlined";
import { Conversation } from "../../../reduxstore/reducer/contactreducer/conversation/converRinter";
import { useDispatch } from "react-redux";
import { LogOut } from "./chatFeedStyle";
import { LeaveUserConversation } from "../../../reduxstore/action/contacta/conversation/convACrud";
const DropChat: React.FC<{
  drop: boolean;
  current: Conversation;
}> = ({ drop, current }) => {
  const dispatch = useDispatch();
  if (drop) {
    const leaveGroup = () => {
      dispatch(LeaveUserConversation(current._id!, "static"));
    };
    return (
      <DropBody>
        <LogOut onClick={() => leaveGroup()}>
          <Exit style={{ fontSize: "18px", marginRight: "10px" }} />
          <p>leave group</p>
        </LogOut>
      </DropBody>
    );
  } else {
    return <></>;
  }
};

export default DropChat;
