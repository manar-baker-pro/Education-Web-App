import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Register } from "../../reduxstore/action/useraction/userAsup";
import { TryRegister } from "../../reduxstore/reducer/usereducer/authreducer/userRinter";
import { RootState } from "../../reduxstore/store";
import { ButtonSignture } from "../reusable/reusableStyle";
import {
  SignCont,
  Screen,
  SignForm,
  GlobalStyle,
  Welcome,
  HeaderSignture,
  WelcomeParg,
} from "./SignStyle";
import IteroatObject from "../reusable/iterobject/IteroatObject";
import { Navigate } from "react-router-dom";
function SignUp() {
  const dispatch = useDispatch();
  const userRigister = useSelector((state: RootState) => state.userRigister);
  const { errorup, message } = userRigister;
  const [user, setUser] = useState<TryRegister>({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const handlertext = (e: any) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const sign = () => {
    dispatch(Register(user));
  };
  if (message) {
    return <Navigate to={"/confirm"} />;
  }

  return (
    <>
      <GlobalStyle />
      <SignCont>
        <Screen
          style={{
            borderTopLeftRadius: " 10px",
            borderBottomLeftRadius: " 10px",
          }}
        >
          <Welcome>
            <HeaderSignture> We Are THABER</HeaderSignture>
            <WelcomeParg>Sign up to continue access</WelcomeParg>
          </Welcome>
        </Screen>

        <Screen
          background="#e0e0f2"
          backgrondImage="null"
          style={{
            borderTopRightRadius: " 10px",
            borderBottomRightRadius: " 10px",
          }}
        >
          <SignForm paddingTop="35px">
            <IteroatObject
              error={errorup}
              updateState={handlertext}
              obj={user}
            />
          </SignForm>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              position: "absolute",
              bottom: "8%",
              left: "10%",
              right: "10%",
              zIndex: "999",
            }}
          >
            <ButtonSignture onClick={() => sign()}>Sign up</ButtonSignture>
          </div>
        </Screen>
      </SignCont>
    </>


  );
}

export default SignUp;
