import { useState } from "react";
import { TrySign } from "../../reduxstore/reducer/usereducer/authreducer/userRinter";
// import { Logo } from "../reusable/reusableStyle";
import {
  SignCont,
  Screen,
  ScreenCont,
  SignForm,
  WelcomeParg,
  GlobalStyle,
  Welcome,
  HeaderSignture,
} from "./SignStyle";
import { ButtonSignture } from "../reusable/reusableStyle";
import { RootState } from "../../reduxstore/store";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../reduxstore/action/useraction/userAsine";
import { ToastContainer } from "react-toastify";
import IteroatObject from "../reusable/iterobject/IteroatObject";
import { Navigate } from "react-router-dom";
function Signin() {
  const dispatch = useDispatch();
  const userSign = useSelector((state: RootState) => state.userSign);
  const { errorin } = userSign;
  const userRigister = useSelector((state: RootState) => state.userRigister);
  const { errorup, message } = userRigister;
  const [user, setUser] = useState<TrySign>({
    email: "",
    password: "",
  });
  const handlertext = (e: any) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const signIn = () => {
    dispatch(Login(user));
  };
  if (message) {
    return <Navigate to={"/confirm"} />;
  }

  return (
    <>
      <SignCont>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Screen
          style={{
            borderTopLeftRadius: " 10px",
            borderBottomLeftRadius: " 10px",
          }}
        >
          <Welcome>
            <HeaderSignture> We Are THABER</HeaderSignture>
            <WelcomeParg> Sign in to continue access</WelcomeParg>
          </Welcome>
        </Screen>
        <Screen
          backgrondImage="null"
          style={{
            borderTopRightRadius: " 10px",
            borderBottomRightRadius: " 10px",
          }}
        >
          <ScreenCont>
            <HeaderSignture color="#472ea3"> Sign In</HeaderSignture>

            <SignForm>
              <IteroatObject
                error={errorin}
                updateState={handlertext}
                obj={user}
              />
            </SignForm>
          </ScreenCont>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              position: "absolute",
              bottom: "20%",
              left: "2px",
              right: "0",
            }}
          >
            <ButtonSignture onClick={() => signIn()} style={{ zIndex: "10" }}>
              Sign in
            </ButtonSignture>
          </div>
        </Screen>
      </SignCont>
    </>
  );
}

export default Signin;
