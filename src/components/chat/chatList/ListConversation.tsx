import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Socket } from "socket.io-client";
import {
  AddConversation,
  GetConversations,
  GetConversationsOfLang,
  SetChatId,
} from "../../../reduxstore/action/contacta/conversation/convACrud";
import { ConvList } from "./chatListStyle";
import GroupIcon from "@mui/icons-material/Group";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { RootState } from "../../../reduxstore/store";
import { useParams } from "react-router-dom";
import FormateDate from "../reusedChatCom/FormateDate";
import { Link } from "react-router-dom";
import {
  SearchBox,
  SearchCon,
  SearchBtn,
  SearchInput,
  HeaderHistory,
  ConversationList,
  ConversationItem,
  LangAvatar,
  ContainConv,
  LangInfo,
  GroupName,
  LastMessageInfo,
  MessCon,
  NameAuthLastMessage,
  CountNotReadMessage,
  LangDate,
} from "./chatListStyle";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HiveSharpIcon from "@mui/icons-material/HiveSharp";
import { Conversation } from "../../../reduxstore/reducer/contactreducer/conversation/converRinter";
//import { Conversation } from "../../reduxstore/reducer/contactreducer/conversation/converRinter";
interface Convx {
  socket?: Socket<DefaultEventsMap, DefaultEventsMap>;
  trans?: string;
}
function CovnerCom({ socket, trans }: Convx) {
  const dispatch = useDispatch();
  const [tranformCh, setTranformCh] = useState(false);
  const conRed = useSelector((state: RootState) => state.ConVersation);
  const { currentChat, convDa } = conRed;

  let p = useParams();

  useEffect(() => {
    if (p && Object.keys(p).length !== 0) {
      dispatch(GetConversationsOfLang(p.langId!));
    } else {
      dispatch(GetConversations());
    }
  }, [p, dispatch]);

  useEffect(() => {
    if (socket) {
      socket
        .off("newConversation")
        .on("newConversation", (conv: Conversation) => {
          socket.emit("joinhand", conv._id);
          dispatch(AddConversation(conv));
        });

      return () => {
        socket?.off("newConversation");
      };
    }
  }, [socket, dispatch]);

  return (
    <ConvList transform={trans}>
      <HeaderHistory>
        <Link to="/">
          <HiveSharpIcon
            style={{
              color: " #c3c6f1",
              marginTop: "7px",
              fontSize: "24px ",
              cursor: "pointer",
            }}
          />
        </Link>

        <SearchCon>
          <SearchBox>
            <SearchInput type="text" placeholder="Search" />
          </SearchBox>
          <SearchBtn>
            <span>
              <SearchRoundedIcon
                style={{
                  fontSize: "25px !important",
                  color: "rgb(48, 48, 48)",
                  marginTop: "5px",
                }}
              />
            </span>
          </SearchBtn>
        </SearchCon>
      </HeaderHistory>
      <ConversationList>
        {convDa?.map((con) => {
          return (
            <ConversationItem
              style={{
                backgroundColor:
                  currentChat?._id === con._id ? "#c8cdfce7" : "",
              }}
              key={con._id}
              onClick={() => {
                setTranformCh(true);
              }}
            >
              <LangAvatar backgrondImage={con?.picture} />

              <ContainConv onClick={() => dispatch(SetChatId(con))}>
                <LangInfo>
                  <GroupName>
                    <GroupIcon
                      style={{
                        fontSize: "18px",
                        marginRight: "5px",
                        color: "#707070",
                      }}
                    />
                    <p>{con.title}</p>
                  </GroupName>
                  {con?.lastmessage?.createdAt && (
                    <FormateDate
                      createdAt={con.lastmessage?.createdAt}
                      fontSize="11.5px"
                    />
                  )}
                </LangInfo>
                <LastMessageInfo>
                  <MessCon>
                    <NameAuthLastMessage>
                      {con?.lastmessage?.author?.name}:
                    </NameAuthLastMessage>
                    <p
                      style={{
                        width: "190px",
                        display: "block",
                        overflow: "hidden",
                        overflowWrap: "break-word",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        marginLeft: "10px",
                      }}
                    >
                      {con?.lastmessage?.content}
                    </p>
                  </MessCon>
                </LastMessageInfo>
              </ContainConv>
            </ConversationItem>
          );
        })}
      </ConversationList>
    </ConvList>
  );
}

export default CovnerCom;
