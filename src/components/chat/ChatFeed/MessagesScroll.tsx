import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ClearVars,
  GetMessages,
} from "../../../reduxstore/action/contacta/messageac/messageACrud";
import { Conversation } from "../../../reduxstore/reducer/contactreducer/conversation/converRinter";
import { RootState } from "../../../reduxstore/store";
import FormateDate from "../reusedChatCom/FormateDate";
import {
  AvatarMessage,
  MessageInfo,
  MessageContainer,
  MessageTimestamp,
  MessageAuth,
  MessageItem,
  ConMessageDate,
  ListMessages,
  MessageContent,
} from "./chatFeedStyle";

function MessagesScroll({ currentChat }: { currentChat: Conversation }) {
  const dispatch = useDispatch();
  const scroll = useRef<HTMLDivElement>(null);
  const messRed = useSelector((state: RootState) => state.MessAge);
  const { messDa, pageNumber, hasMore, messload } = messRed;
  const userRed = useSelector((state: RootState) => state.userSign);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const { userInfo } = userRed;

  useEffect(() => {
    return () => {
      dispatch(ClearVars());
    };
  }, [currentChat._id, dispatch]);

  const isTop = (el: HTMLElement) => {
    return el.scrollTop === 0;
  };
  const trackScrolling = useCallback(() => {
    const wrappedElement = document.getElementById("listing-container");

    if (
      isTop(wrappedElement!) &&
      messload === false &&
      pageNumber > 1 &&
      currentChat._id
    ) {
      dispatch(GetMessages(currentChat._id, pageNumber));
    }
  }, [pageNumber, messload, dispatch, currentChat._id]);

  useEffect(() => {
    const wrappedEleme = document.getElementById("listing-container");
    if (hasMore === true) {
      wrappedEleme?.addEventListener("scroll", trackScrolling);
    }
    return () => {
      wrappedEleme?.removeEventListener("scroll", trackScrolling);
    };
  }, [trackScrolling, hasMore]);

  useEffect(() => {
    scroll?.current?.scrollIntoView({
      behavior: "auto",
      block: "end",
      inline: "nearest",
    });
  }, [messDa]);
  const scrollToBottom = () => {
    if (messagesEndRef.current != null) {
      messagesEndRef.current!.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messDa]);

  return (
    <ListMessages id="listing-container">
      {messDa?.map((msg, index) => {
        return (
          <div key={msg._id}>
            <ConMessageDate
              style={{ display: "flex", justifyContent: "center" }}
            >
              <FormateDate
                createdAt={messDa[index].createdAt}
                check={true}
                isfirst={index === 0}
                prev={messDa[index > 0 ? index - 1 : 0].createdAt}
              />
            </ConMessageDate>
            <MessageItem
              ref={msg.author?._id === userInfo?._id ? messagesEndRef : null}
              float={msg.author?._id === userInfo?._id ? "right" : ""}
              marginRight={msg.author?._id === userInfo?._id ? "2%" : ""}
              flexDirection={
                msg.author?._id === userInfo?._id ? "row-reverse" : ""
              }
            >
              <AvatarMessage
                backgroundImage={msg.author.profilePic} //msg.author.profilePic
                marginLeft={msg.author?._id === userInfo?._id ? "20px" : ""}
                marginRight={msg.author?._id === userInfo?._id ? "" : "20px"}
                alignSelf={
                  msg.author?._id === userInfo?._id ? "flex-end" : "flex-start"
                }
              />

              <MessageInfo
                backgroundColor={
                  msg.author?._id === userInfo?._id ? "#babefb" : "#f0f0f0"
                }
                borderBottom={
                  msg.author?._id === userInfo?._id ? "15px solid #babefb" : ""
                }
                borderTop={
                  msg.author?._id === userInfo?._id ? "" : "15px solid #f0f0f0"
                }
                top={msg.author?._id === userInfo?._id ? "" : "0px"}
                right={msg.author?._id === userInfo?._id ? "-10px" : ""}
                left={msg.author?._id === userInfo?._id ? "" : "-15px"}
                bottom={msg.author?._id === userInfo?._id ? "0px" : ""}
              >
                <MessageAuth
                  style={{ margin: "5px 0px", textTransform: "capitalize" }}
                >
                  {msg.author.name}
                </MessageAuth>
                <MessageContainer>
                  <MessageContent style={{ overflowWrap: "anywhere" }}>
                    {msg.content}
                  </MessageContent>
                  <MessageTimestamp>
                    <FormateDate
                      createdAt={messDa[index].createdAt}
                      check={false}
                      prev={messDa[index > 0 ? index - 1 : 0].createdAt}
                      me={msg.author?._id === userInfo?._id}
                  
                    />
                  </MessageTimestamp>
                </MessageContainer>
              </MessageInfo>
            </MessageItem>
          </div>
        );
      })}
    </ListMessages>
  );
}

export default MessagesScroll;
