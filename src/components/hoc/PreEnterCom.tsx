import { useSelector } from "react-redux";
import { RootState } from "../../reduxstore/store";
import { ApiCall, Components } from "../../routes/Authorize";
function PreEnterCom(
  WrappedElement: any,
  ComponentName: Components,
  Verb: ApiCall
) {
  function Prev(props: any) {
    const useSign = useSelector((state: RootState) => state.userSign);
    const { userInfo } = useSign;
    if (!userInfo || (userInfo && Object.keys(userInfo).length === 0))
      return null;
    if (!userInfo.role[ComponentName][Verb].given) return null;
    return <WrappedElement {...props} roles={userInfo.role} />;
  }
  return Prev;
}

export default PreEnterCom;
