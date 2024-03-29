import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../reduxstore/store";
import { ApiCall, Components } from "./Authorize";

export const RequireAuth: React.FC<{
  children: JSX.Element;
  componentNa?: Components;
}> = ({ children, componentNa }) => {
  let location = useLocation();

  const useSign = useSelector((state: RootState) => state.userSign);
  const { userInfo } = useSign;
  if (!userInfo || (userInfo && Object.keys(userInfo).length === 0)) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }
  if (componentNa && !userInfo.role[componentNa]["GET"].given) {
    return <Navigate to="/" />;
  }

  return children;
};

export const OnlineRoute: React.FC<{
  children: JSX.Element;
  conf?: boolean;
}> = ({ children, conf }) => {
  let location = useLocation();
  const useSign = useSelector((state: RootState) => state.userSign);
  const { userInfo } = useSign;
  const useRegis = useSelector((state: RootState) => state.userRigister);
  const { message, success } = useRegis;
  if (userInfo && Object.keys(userInfo).length > 0) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  if (conf) {
    if (message || success) return children;
    else return <Navigate to="/signin" />;
  } else return children;
};

export const AuthorizeRout: React.FC<{
  children: JSX.Element;
  componentNa: Components;
  callVerb: ApiCall;
}> = ({ children, componentNa, callVerb }) => {
  const useSign = useSelector((state: RootState) => state.userSign);
  const { userInfo } = useSign;
  let location = useLocation();

  if (!userInfo || (userInfo && Object.keys(userInfo).length === 0)) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  if (componentNa && !userInfo.role[componentNa][callVerb].given) {
    if (location.pathname !== "/")
      return <Navigate to="/" state={{ from: location }} />;
    else return null;
  }

  return children;
};

export const AuthorizeShow: React.FC<{
  children: JSX.Element;
  componentNa: Components;
  callVerb: ApiCall;
}> = ({ children, componentNa, callVerb }) => {
  const useSign = useSelector((state: RootState) => state.userSign);
  const { userInfo } = useSign;

  if (!userInfo || (userInfo && Object.keys(userInfo).length === 0)) {
    return null;
  }
  if (componentNa && !userInfo.role[componentNa][callVerb].given) {
    return null;
  }

  return children;
};
