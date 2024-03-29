import { useEffect } from "react";
import { EstablishConnection } from "../../reduxstore/reducer/socketreducer/SocketAppended";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxstore/store";
import PreEstablish from "./PreEstablish";
import { toast } from "react-toastify";
import { CreateMessage } from "../../reduxstore/action/contacta/messageac/messageACrud";
import { Message } from "../../reduxstore/reducer/contactreducer/message/messageRinter";
import { Conversation } from "../../reduxstore/reducer/contactreducer/conversation/converRinter";
import {
  AddConversation,
  JoinUserConversation,
  LeaveUserConversation,
} from "../../reduxstore/action/contacta/conversation/convACrud";
import { Conv, Msg } from "./notificationTemp";
import { UpdateUsersInConv } from "../../reduxstore/action/useraction/userDashAc";
import { UserForSerach } from "../../reduxstore/reducer/usereducer/authreducer/userRinter";

function EstablishConn(props: any) {
  const dispatch = useDispatch();
  const socketRed = useSelector((state: RootState) => state.soCket);
  const { socketio } = socketRed;

  useEffect(() => {
    dispatch(EstablishConnection());
  }, [dispatch]);
  useEffect(() => {
    if (socketio) {
      let id = props.userInfo?._id;
      socketio.off("handshake").on("handshake", (arg1: boolean) => {
        if (arg1) {
          socketio.emit("joinAll", { userId: id });
        }
      });
      socketio
        .off("newMessage", (msg: Message) => {
          dispatch(CreateMessage(undefined, "real", msg));
        })
        .on("newMessage", (msg: Message) => {
          if (id !== msg.author._id) {
            toast.dismiss();
            toast(<Msg msg={msg} />, {
              autoClose: 2000,
              hideProgressBar: true,
              pauseOnHover: true,
              theme: "dark",
            });
          }
          dispatch(CreateMessage(undefined, "real", msg));
        });
      socketio
        .off("newConversation")
        .on("newConversation", (conv: Conversation) => {
          toast.dismiss();
          toast(<Conv msg={conv} />, {
            autoClose: 2000,
            hideProgressBar: true,
            pauseOnHover: true,
            theme: "dark",
          });
          socketio.emit("joinhand", conv._id);
          dispatch(AddConversation(conv));
        });

      socketio.off("newUser").on("newUser", (user) => {
        if (user) {
          dispatch(UpdateUsersInConv(user));
        }
      });
      socketio
        .off("InsertUser")
        .on(
          "InsertUser",
          (payload: { user: UserForSerach; convId: string }) => {
            dispatch(
              JoinUserConversation(payload.convId, "real", payload.user)
            );
          }
        );
      socketio
        .off("RemoveUser")
        .on("RemoveUser", (leave: { convId: string; userId: string }) => {
          dispatch(LeaveUserConversation(leave.convId, "real", leave.userId));
        });
        socketio.off("newUser").on("newUser", (user) => {
          if (user) {
            dispatch(UpdateUsersInConv(user));
          }
        });
        socketio
          .off("InsertUser")
          .on(
            "InsertUser",
            (payload: { user: UserForSerach; convId: string }) => {
              dispatch(
                JoinUserConversation(payload.convId, "real", payload.user)
              );
            }
          );
        socketio
          .off("RemoveUser")
          .on("RemoveUser", (leave: { convId: string; userId: string }) => {
            dispatch(LeaveUserConversation(leave.convId, "real", leave.userId));
          });
    }
    return () => {
      socketio?.off("handshake");
      socketio?.off("newMessage");
      socketio?.off("newConversation");
      socketio?.off("InsertUser");
      socketio?.off("RemoveUser");
      socketio?.off("newUser");
      socketio?.off();
      socketio?.off("InsertUser");
      socketio?.off("RemoveUser");
      socketio?.off("newUser");
    };
  }, [socketio, props.userInfo, dispatch]);
  return null;
}

export default PreEstablish(EstablishConn);
