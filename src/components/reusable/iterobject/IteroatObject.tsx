import { useState } from "react";
import { TextField } from "@mui/material";
import ErrorShow from "./ErrorShow";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";

interface Iter {
  obj: Object;
  updateState: any;
  error: any;
}
function IteroatObject({ obj, updateState, error }: Iter) {
  const [isSelected, setSelected] = useState(false);
  const [isError, setIsError] = useState(false);

  // const stylem = {
  //   '@media (maxWidth: 600px)': {
  //     width: '10px',
  //   },
  // };

  const handleSelected = () => {
    if (error) {
      setIsError(true);
    }
  };
  const handleStyleWithError = () => {
    setSelected(true);
  };
  return (
    <>
      {Object.keys(obj).map((key, index) => {
        return (
          <div key={index} style={{ boxSizing: "border-box" }}>
            <TextField
              label={key}
              name={key}
              type={
                key === "password" || key === "confirmpassword"
                  ? "password"
                  : "text"
              }
              error={
                (typeof error === "object" && typeof error[key] === "string") ||
                (typeof error === "object" &&
                  error[key] &&
                  Array.isArray(error[key]))
                  ? true
                  : false
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {key === "password" ? (
                      <LockOutlinedIcon
                        style={{ fontSize: "16px", color: "#5d5e5f" }}
                      />
                    ) : key === "confirmpassword" ? (
                      <KeyOutlinedIcon
                        style={{ fontSize: "16px", color: "#5d5e5f" }}
                      />
                    ) : key === "email" ? (
                      <EmailOutlinedIcon
                        style={{ fontSize: "16px", color: "#5d5e5f" }}
                      />
                    ) : (
                      <PersonOutlineOutlinedIcon
                        style={{ fontSize: "16px", color: "#5d5e5f" }}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              style={{
                
                marginTop: `${isError?"10px":"20px"}`,
                textTransform: "capitalize",
                width: "110%",
                position: "relative",
                borderImageSlice: "9",
                borderImageSource:
                  "linear-gradient(to left, rgb(195, 115, 227), rgb(159, 117, 227), rgb(111, 111, 237), rgb(109, 44, 229))",
              }}
              onChange={(e) => {
                updateState(e);
                handleSelected();
              }}
            />
            <ErrorShow field={key} error={error} />
          </div>
        );
      })}
    </>
  );
}

export default IteroatObject;
