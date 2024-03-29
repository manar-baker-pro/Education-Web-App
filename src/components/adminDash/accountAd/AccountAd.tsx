import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccountDiv, AccountInfo, ContainerAc } from "./AccounStyle";
import TextField from "@mui/material/TextField";
import { UserOrig } from "../../../reduxstore/reducer/usereducer/authreducer/userRinter";
import { ChangeUserPic } from "../../reusable/reusableStyle";
import { CreateAccount } from "../../../reduxstore/action/useraction/userAsup";
import { RootState } from "../../../reduxstore/store";
import { Autocomplete } from "@mui/material";
import { Role } from "../../../reduxstore/reducer/rolereducer/roleRinter";
import { GetRoles } from "../../../reduxstore/action/roleaction/roleInfo";
import { DashHeader, HomeDashText } from "../homeDash/HomeDashStyle";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AutoComLang from "../../reusable/autocomplete/AutoComLang";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: any) => ({
  root: {
    "& .MuiButtonBase-root": {
      color: "white",
      background: "#5e4f91",
      transition: "all 0.2s ease-in",
      margin: "1px",
    },
    "&:hover .MuiButtonBase-root": {
      background: "#684aefe9",
    },
  },
  inputRoot: {
    "&.MuiOutlinedInput-root": {
      background: "transparent",
      color: "black",
    },
    "&.MuiOutlinedInput-input": {
      color: "green",
    },
    "&.Mui-focused &.MuiOutlinedInput-input": {
      color: "red",
    },
  },
}));

function AccountAd() {
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetRoles());
  }, [dispatch]);
  const RoleRed = useSelector((state: RootState) => state.roLe);
  const { roleDa } = RoleRed;

  const [account, setAccount] = useState<UserOrig>({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    languages: [],
    role: "",
  });
  const handlertext = (e: any) => {
    setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addLanguageH = (newValue: any) => {
    setAccount((preState) => {
      let languages = [...preState.languages];
      languages = newValue || [];
      return { ...preState, languages };
    });
  };

  const sign = () => {
    dispatch(CreateAccount(account));
  };

  return (
    <AccountDiv>
      <DashHeader >
        <SupervisorAccountIcon
          style={{
            fontSize: "2.4em",
            padding: "10px",
            color: "white",
            borderRadius: "4px",
            marginLeft: "2px",
            background: "linear-gradient(90deg,#da8cff,#9a55ff)",
            boxShadow: "0 3px 8.3px 0.7px rgb(163 93 255 / 35%)",
          }}
        />
        <HomeDashText>Create Account</HomeDashText>
      </DashHeader>
      <ContainerAc>
        <AccountInfo>
          <TextField
            label="Name"
            name="name"
            variant="standard"
            style={{ margin: "10px", width: "80%" }}
            onChange={(e) => handlertext(e)}
          />
          <TextField
            label="Email"
            name="email"
            variant="standard"
            style={{ margin: "10px", width: "80%" }}
            onChange={(e) => handlertext(e)}
          />
          <TextField
            label="Password"
            name="password"
            variant="standard"
            style={{ margin: "10px", width: "80%" }}
            onChange={(e) => {
              handlertext(e);
            }}
          />
          <TextField
            label="Confirm password"
            name="confirmpassword"
            variant="standard"
            style={{ margin: "10px", width: "80%" }}
            onChange={(e) => {
              handlertext(e);
            }}
          />
        </AccountInfo>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <AutoComLang
            setState={addLanguageH}
            multiple={true}
            label={"Experiances"}
          />
          {roleDa && roleDa.length > 0 ? (
            <Autocomplete
              classes={classes}
              disablePortal
              onChange={(event, newValue) => {
                setAccount((preState) => {
                  let role = newValue?._id || "";
                  return { ...preState, role };
                });
              }}
              id="combo-box-demo"
              sx={{ width: "250px", margin: "10px 0px" }}
              options={roleDa}
              getOptionLabel={(option) => option._id}
              isOptionEqualToValue={(option: Role, value: Role) =>
                option._id === value._id
              }
              renderInput={(params) => <TextField {...params} label="Role" />}
            />
          ) : (
            ""
          )}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ChangeUserPic
              onClick={() => {
                sign();
              }}
            >
              Create Account
            </ChangeUserPic>
          </div>
        </div>
      </ContainerAc>
    </AccountDiv>
  );
}

export default AccountAd;
