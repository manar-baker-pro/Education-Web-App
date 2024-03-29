import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import MODALBox from "./modalBox";
import { GroupAvatar } from "../ChatFeed/chatFeedStyle";
const MODAL = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Avatar = <GroupAvatar backgroundImage={props.imgCon} />;
  return (
    <>
      <GroupAvatar backgroundImage={props.imgCon} onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={{
            position: "relative",
            height: "550px",
            width: "370px",
            backgroundColor: " rgb(240, 239, 241)",
            margin: "0 auto",
            marginTop: "50px",
            outline: "none",
            boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.5)",
            borderRadius: "10px",
            fontSize: "14px !important",
          }}
        >
          <MODALBox AvatarLang={Avatar} lang={props.titleCon} />
        </Box>
      </Modal>
    </>
  );
};
export default MODAL;
