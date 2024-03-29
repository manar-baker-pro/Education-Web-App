import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxstore/store";
import { ButtonSignture } from "../reusable/reusableStyle";
import { ConfirmE } from "../../reduxstore/action/useraction/userAsup";
function ConfirmEmail() {
  const useRegis = useSelector((state: RootState) => state.userRigister);
  const { success } = useRegis;

  const dispatch = useDispatch();

  if (success === true) {
    return (
     <>
     <div
        style={{
          // marginTop: "70px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor:"blue",
          background:"linear-gradient(90deg, #C7C5F4, #776BCC)",
          justifyContent: "center",
          height: "100vh",
          width:"100vw",
          fontSize:"1.3em",
        }}
      >
         <div style={{width:"600px",textAlign:"center",padding:"40px",backgroundColor:"rgb(227, 95, 220,0.4)",borderRadius:"10px",
            boxShadow: "0 3px 8.3px 0.7px rgb(163 93 255 / 35%)",
          }}>
          <p style={{width:"500px"}}>Message was sent successfull check your email to activate email</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      
      <div
        style={{
          // marginTop: "70px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor:"blue",
          background:"linear-gradient(90deg, #C7C5F4, #776BCC)",
          justifyContent: "center",
          height: "100vh",
          width:"100vw",
          fontSize:"1.3em",
        }}
      >
        <div style={{width:"600px",textAlign:"center",padding:"40px",backgroundColor:"rgb(227, 95, 220,0.4)",borderRadius:"10px",
            boxShadow: "0 3px 8.3px 0.7px rgb(163 93 255 / 35%)",
          }}>
        <p style={{width:"500px"}}>
          Thanks for Join Thaber Activate your account By reciving message on
          your mail
        </p>

        <ButtonSignture  style={{ marginTop:"20px"}}onClick={() => dispatch(ConfirmE())}>recive message</ButtonSignture>
        </div>
      </div>
    </>
  );
}

export default ConfirmEmail;
