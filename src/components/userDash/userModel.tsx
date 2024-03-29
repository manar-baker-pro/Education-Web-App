import Modal from "react-modal";
import {
  UserPicSec,
  UserPic,
  UserProfileFields,
  UserField,
} from "./userModalStyle";
import Profile from "@material-ui/icons/AccountBox";
import { content, overlay } from "./userStyle";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetProfile,
  UpdateProfile,
} from "../../reduxstore/action/useraction/userProfileAc";
import "./user.css";
import TextFieldProfile from "./TextFieldProfile";
import { RootState } from "../../reduxstore/store";
import { UserProfile } from "../../reduxstore/reducer/usereducer/authreducer/userRinter";
import AutoComForm from "../reusable/autocomplete/AutoComForm";
import { GetLangs } from "../../reduxstore/action/langaction/langCrud";
import { Lang } from "../../reduxstore/reducer/langreducer/langRinter";
import PushCloud from "../adminDash/cloud/PushCloud";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { ChangeUserPic } from "../reusable/reusableStyle";
import "../question/ReactModalCom.css";
import { AuthorizeShow } from "../../routes/AuthRoute";
import { ApiEnum, ComponentName } from "../../routes/Authorize";
import PreEnterCom from "../hoc/PreEnterCom";
Modal.setAppElement("#root");

function UserModel(props: any) {
  const [userprofiles, setprofile] = useState<UserProfile>({
    email: "",
    languages: [],
    name: "",
    profilePic: "",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProfile());
  }, [dispatch]);
  useEffect(() => {
    if (props.roles[ComponentName.Conversation][ApiEnum.GET].given)
      dispatch(GetLangs("true"));
  }, [dispatch, props.roles]);
  const ProfileRed = useSelector((state: RootState) => state.userProfile);
  const { userprofileinfo, userprofileload } = ProfileRed;
  const LangRed = useSelector((state: RootState) => state.lanGuage);
  const { langDa } = LangRed;

  useEffect(() => {
    let mount = true;
    if (mount) {
      setprofile(userprofileinfo);
    }
    return () => {
      mount = false;
    };
  }, [userprofileinfo]);

  const ch = (e: any, type?: string, value?: string) => {
    if (type === "file") {
      setprofile((prev) => {
        return { ...prev, [`${e.target.name}`]: value };
      });
    } else {
      setprofile((prev) => {
        return { ...prev, [`${e.target.name}`]: e.target.value };
      });
    }
  };

  const changeLanguage = (newValue: any) => {
    setprofile((preState) => {
      let languages = [...preState.languages];
      languages = newValue || [];
      return { ...preState, languages };
    });
  };
  const update = () => {
    dispatch(UpdateProfile(userprofiles));
  };

  return (
    <Modal
      isOpen={props.openModal}
      onRequestClose={props.closeModal}
      closeTimeoutMS={500}
      style={{
        overlay: overlay,
        content: content,
        
      }}
    >
      <UserPicSec>
        <UserPic alt="user" src={userprofiles.profilePic} />
        <PushCloud name={"profilePic"} change={ch} desc={"Set Profile Photo"} />
      </UserPicSec>
      <UserProfileFields>
        <UserField>
          <Profile style={{ marginTop: "10px", color: "white" }} />
          <TextFieldProfile
          load={userprofileload}
            label="name"
            valuefield={userprofiles.name}
            setText={ch}
            read={false}
          />
        </UserField>
        <UserField>
          <AlternateEmailIcon style={{ marginTop: "10px", color: "white" }} />
          <TextFieldProfile
           load={userprofileload}
            label="email"
            valuefield={userprofileinfo.email}
            setText={ch}
            read={true}
          />
        </UserField>
        <UserField>
          <AutoComForm
            data={langDa}
            cbmatch={(option: Lang, value: Lang) => option._id === value._id}
            label="Experiances"
            multiple={true}
            cbsele={(option: Lang) => `${option.lang}`}
            setState={changeLanguage}
            defautlValue={userprofileinfo.languages}
            load={userprofileload}
          />
        </UserField>
        <AuthorizeShow
          componentNa={ComponentName.Profile}
          callVerb={ApiEnum.PUT}
        >
          <ChangeUserPic onClick={update} style={{marginLeft:"40px"}}>Update Profile</ChangeUserPic>
        </AuthorizeShow>
      </UserProfileFields>
    </Modal>
  );
}

export default PreEnterCom(UserModel, ComponentName.Profile, ApiEnum.GET);
