import { useSelector } from "react-redux";
// import Spinner from "react-spinner-material";
import { RootState } from "../../reduxstore/store";
import {
  LoadCont,
  Loader,
  LoadInner1,
  LoadInner2,
  LoadInner3,
} from "./LoadStyle";
function Load() {
  const userRigister = useSelector((state: RootState) => state.userRigister);
  const userSign = useSelector((state: RootState) => state.userSign);
  const userProfile = useSelector((state: RootState) => state.userProfile);

  const ConVersation = useSelector((state: RootState) => state.ConVersation);
  const MessAge = useSelector((state: RootState) => state.MessAge);
  const lecTure = useSelector((state: RootState) => state.lecTure);
  const lanGuage = useSelector((state: RootState) => state.lanGuage);
  const quesTion = useSelector((state: RootState) => state.quesTion);

  const { quesload } = quesTion;
  const { loadin } = userSign;
  const { loadup } = userRigister;
  const { convload } = ConVersation;
  const { messload } = MessAge;
  const { langload } = lanGuage;
  const { lecload } = lecTure;
  const { userprofileload } = userProfile;
  return quesload ||
    loadin ||
    loadup ||
    convload ||
    messload ||
    langload ||
    lecload ||
    userprofileload ? (
    <LoadCont>
      <Loader>
        <LoadInner1 />
        <LoadInner2 />
        <LoadInner3 />
      </Loader>
    </LoadCont>
  ) : (
    <></>
  );
}

export default Load;
