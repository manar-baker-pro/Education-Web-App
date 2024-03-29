import { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Socket } from "socket.io-client";
import {
  ClearVars,
  CreateMessage,
  GetMessages,
} from "../../../reduxstore/action/contacta/messageac/messageACrud";
import MODAL from "../Modal/modal";
import { ChatConvContainer } from "../chatList/chatListStyle";
import { RootState } from "../../../reduxstore/store";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import BeeSayHi from "../../../images/beeHoney.gif";
import BeeSayWelc from "../../../images/s.gif";
import { Conversation } from "../../../reduxstore/reducer/contactreducer/conversation/converRinter";
import { JoinUserConversation } from "../../../reduxstore/action/contacta/conversation/convACrud";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import DropChat from "./DropChat";
import MessagesScroll from "./MessagesScroll";
import { MessageCreate } from "../../../reduxstore/reducer/contactreducer/message/messageRinter";
import {
  AnticonArrowup,
  MessageButton,
  AnticonPaperclip,
  CustTextarea,
  RelForm,
  FormCont,
  CountgroupMembers,
  GroupName,
  ChatTitle,
  ChatTitleCon,
} from "./chatFeedStyle";
import { GetUsersInConv } from "../../../reduxstore/action/useraction/userDashAc";
interface Chatx {
  currentChat?: Conversation;
  socket?: Socket<DefaultEventsMap, DefaultEventsMap>;
  trans?: string;
  Back?: any;
}
function ChatBox({ currentChat, socket, trans, Back }: Chatx) {
  const dispatch = useDispatch();
  const [visibility, setvisibility] = useState(false);
  const [toinitial, settoinitial] = useState(false);
  const [message, setmessage] = useState("");
  // const [resetHeight, setResetHeight] = useState(false);
  const [tog, setTog] = useState<boolean>(false);
  const messRed = useSelector((state: RootState) => state.MessAge);
  const { pageNumber } = messRed;
  const userRed = useSelector((state: RootState) => state.userSign);
  const { userInfo } = userRed;
  const userDashRed = useSelector((state: RootState) => state.userDash);
  const { users } = userDashRed;
  useEffect(() => {
    return () => {
      dispatch(ClearVars());
    };
  }, [dispatch]);
  useEffect(() => {
    if (currentChat && currentChat.isjoined !== 0 && pageNumber === 1) {
      dispatch(GetMessages(currentChat._id, 1));
      dispatch(GetUsersInConv());
    }
    return () => {
      setmessage("");
    };
  }, [currentChat, pageNumber, dispatch]);

  const handleMessage = useCallback(() => {
    if (message) {
      const messageBody: MessageCreate = {
        author: userInfo?._id || "",
        content: message,
        conversation: currentChat?._id || "",
      };
      dispatch(CreateMessage(messageBody, "static"));
      setmessage("");
    }
  }, [message, userInfo?._id, currentChat?._id, dispatch]);

  useEffect(() => {
    const listener = (event: any) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        settoinitial(!toinitial);  

        setvisibility(true);
        console.log(toinitial);
        event.preventDefault();
        handleMessage();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handleMessage]);

  const handlejoin = (convId: string) => {
    socket?.emit("joinhand", convId);
    dispatch(JoinUserConversation(convId, "static"));
  };
  const handeledVisibility = () => {
    setvisibility(true);
  };
  const autoGrow = (element?: any) => {
    let ele = element.target;
    ele.style.height = "10px";
    ele.style.height = ele.scrollHeight + 0 + "px";
  };

  return (
    <ChatConvContainer transform={trans}>
      {!currentChat ? (
        <div
          style={{
            display: "flex",

            alignItems: "center",
            // paddingTop: "100px",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              backgroundColor: "#776ef78a",
              padding: "10px",
              borderRadius: "20px",
              width: "35%",
              textAlign: "center",
              color: "whitesmoke",
              textTransform: "capitalize",
            }}
          >
            select a chat to start messaging
          </div>
        </div>
      ) : currentChat?.isjoined !== 0 ? (
        <>
          <ChatTitleCon>
            <ChatTitle>
              <div style={{ display: "flex" }}>
                <Back />
                <MODAL
                  imgCon={currentChat.picture}
                  titleCon={currentChat.title}
                />
                <div style={{ alignSelf: "center" }}>
                  <GroupName>{currentChat.title}</GroupName>
                  <CountgroupMembers>{users.length} members</CountgroupMembers>
                </div>
              </div>
              <div>
                <MoreVertRoundedIcon
                  style={{
                    fontSize: "1.5em",
                    cursor: "pointer",
                    color: "#707070",
                  }}
                  onClick={() => setTog((prev) => !prev)}
                />
                <DropChat drop={tog} current={currentChat} />
              </div>
            </ChatTitle>
          </ChatTitleCon>
          <MessagesScroll currentChat={currentChat} />
          <FormCont>
            <RelForm>
              <AnticonPaperclip style={{ fontSize: "24px" }} />
              <CustTextarea
                value={message}
                onChange={(e) => {
                  setmessage(e.target.value);
                  handeledVisibility();
                }}
                placeholder=" Write the message "
                onInput={(e) => {
                  autoGrow(e);
                }}
                style={{ height: `${toinitial ? "" : "53px"}` }}
              />
              <MessageButton>
                <AnticonArrowup
                  onClick={(e) => {
                    handleMessage();
                    settoinitial(!toinitial);  
                    setvisibility(false);
                  }}
                  style={{
                    cursor: "pointer",
                    visibility: `${visibility ? "visible" : "hidden"}`,
                  }}
                />
              </MessageButton>
            </RelForm>
          </FormCont>
        </>
      ) : (
        <>
          <ChatTitleCon>
            <ChatTitle>
              <div style={{ display: "flex" }}>
                <Back />
                <MODAL
                  imgCon={currentChat.picture}
                  titleCon={currentChat.title}
                />
                <div style={{ alignSelf: "center" }}>
                  <GroupName>{currentChat.title}</GroupName>
                </div>
              </div>
            </ChatTitle>
          </ChatTitleCon>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={BeeSayWelc}
              alt="Hi"
              style={{
                width: "180px",
                height: "180px",
                marginRight: "40px",
                marginBottom: "10px",
              }}
            />

            <div
              className="mm"
              style={{
                position: "absolute",
                bottom: "0px",
                width: "100%",
                height: "70px",
                background: "linear-gradient(90deg,#5e4f91,#a536d9)",
                padding: "20px",
                textAlign: "center",
                fontWeight: "600",
                color: "#fff",
                cursor: "pointer",
              }}
              onClick={() => handlejoin(currentChat._id)}
            >
              Join Group
            </div>
          </div>
        </>
      )}
    </ChatConvContainer>
  );
}

export default ChatBox;
