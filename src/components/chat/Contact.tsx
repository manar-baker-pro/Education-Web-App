import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxstore/store";
import ChatBox from "./ChatFeed/ChatBox";
// import AsideBar from "./AsideBar";
import CovnerCom from "./chatList/ListConversation";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import { TransformTo } from "./chatList/chatListStyle";
import { SetChatId } from "../../reduxstore/action/contacta/conversation/convACrud";
import { ChatContainer } from "./chatList/chatListStyle";
import { BackTo } from "./ChatFeed/chatFeedStyle";
function Contact() {
  const dispatch = useDispatch();
  // const [socket, setsocket] =
  //   useState<Socket<DefaultEventsMap, DefaultEventsMap>>();

  const conRed = useSelector((state: RootState) => state.ConVersation);
  const { currentChat } = conRed;
  const socketRed = useSelector((state: RootState) => state.soCket);
  const { socketio } = socketRed;
  const [tranformCh, setTranformCh] = useState(false);
  // const userRed = useSelector((state: RootState) => state.userSign);

  // const { userInfo } = userRed;

  useEffect(() => {
    return () => {
      dispatch(SetChatId());
    };
  }, [dispatch]);
  const backTo = ()=>
    
  <BackTo 
    onClick={() => {
      setTranformCh(false);
      dispatch(SetChatId());
    }}>
  <ArrowBackRoundedIcon />
</BackTo>;

  return (
    <ChatContainer>
      <CovnerCom socket={socketio}
             trans={tranformCh? "1" : "2"}

        />
      {/* <TransformTo  style={{
width:"max-content",
height: "max-content",
      }}> */}

      <ChatBox
        currentChat={currentChat}
        socket={socketio}
        Back={backTo}
        trans={currentChat&&tranformCh==false? "1" : "2"}
      
      />
        {/* </TransformTo> */}

    </ChatContainer>
  );
}

export default Contact;
