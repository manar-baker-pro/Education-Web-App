import { useEffect, useState } from "react";
import Modal from "react-modal";
// import { content, overlay } from "../userDash/userStyle";
import { conten, overla } from "./DecideStyle";
import "./ReactModalCom.css";
import sad from "../../images/sad.gif";
import happy from "../../images/happy.gif";
import { ChangeUserPic } from "../reusable/reusableStyle";
Modal.setAppElement("#root");
function DecideModal(props: any) {
  const [op, setop] = useState<boolean>(true);
  useEffect(() => {
    return () => {
      setop(true);
    };
  }, [props.answer]);
  if (props.answer && props.answer.success === true) {
    return (
      <Modal
        isOpen={op}
        closeTimeoutMS={500}
        onRequestClose={() => {
          setop(false);
        }}
        style={{
          overlay: overla,
          content: conten,
        }}
      >
        <img
          src={happy}
          alt="try again"
          style={{ width: "160px", height: "160px" }}
        />
        <ChangeUserPic onClick={()=>{setop(false)}} >Continue</ChangeUserPic>
      </Modal>
    );
  } else if (props.answer && props.answer.success === false) {
    return (
      <Modal
        isOpen={op}
        closeTimeoutMS={500}
        onRequestClose={() => {
          setop(false);
        }}
        style={{
          overlay: overla,
          content: conten,
        }}
      >
        <img
          src={sad}
          alt="try again"
          style={{ width: "160px", height: "160px" }}
        />
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >

          <ChangeUserPic style={{ width: "100px", padding: " 8px 10px" }} onClick={()=>{setop(false)}}>
            Try Again
          </ChangeUserPic>
        </div>
      </Modal>
    );
  } else {
    return null;
  }
}

export default DecideModal;
