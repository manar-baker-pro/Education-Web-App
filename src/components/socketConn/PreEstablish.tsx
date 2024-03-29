import { useSelector } from "react-redux";
import { RootState } from "../../reduxstore/store";
import {
  ApiCall,
  ApiEnum,
  ComponentName,
  Components,
} from "../../routes/Authorize";

function PreEstablish(WrappedElement: any) {
  function Pre(props: any) {
    const useSign = useSelector((state: RootState) => state.userSign);
    const { userInfo } = useSign;
    const role: Components = ComponentName.Conversation;
    const type: ApiCall = ApiEnum.GET;
    if (
      userInfo &&
      Object.keys(userInfo).length > 0 &&
      userInfo?.role &&
      userInfo.role[role] &&
      userInfo.role[role][type].given
    ) {
      return <WrappedElement {...props} userInfo={userInfo} />;
    } else return null;
  }
  return Pre;
}

export default PreEstablish;
