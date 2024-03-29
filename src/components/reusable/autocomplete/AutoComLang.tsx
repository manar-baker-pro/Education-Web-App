import { Autocomplete, Paper, TextField } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FillFormat,
  GetLangs,
} from "../../../reduxstore/action/langaction/langCrud";
import { Lang } from "../../../reduxstore/reducer/langreducer/langRinter";
import { RootState } from "../../../reduxstore/store";
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
interface AutoCom {
  setState: any;
  multiple: boolean;
  label: string;
  fromlecture?: boolean;
}
function AutoComLang(props: AutoCom) {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetLangs());
  }, [dispatch]);
  const LangRed = useSelector((state: RootState) => state.lanGuage);
  const { langDa } = LangRed;
  return (
    <Autocomplete
      disablePortal
      options={langDa}
      multiple={props.multiple}
      onChange={(ev, newValue) => {
        if (newValue) props.setState(newValue);
        if (props.fromlecture) {
          if (newValue && !Array.isArray(newValue)) {
            dispatch(FillFormat(newValue._id!));
          }
          if (!newValue) {
            dispatch(FillFormat());
          }
        }
      }}
      classes={classes}
      id="combo-box-demo"
      sx={{
        width: "250px",
        margin: "20px 0px 0px 0px",
      }}
      getOptionLabel={(option) => `${option.lang}`}
      PaperComponent={({ children }) => (
        <Paper style={{ backgroundColor: "#684aefe9", color: "white" }}>
          {children}
        </Paper>
      )}
      isOptionEqualToValue={(option: Lang, value: Lang) =>
        option.lang === value.lang
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          InputLabelProps={{
            style: {
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              width: "100%",
              fontSize: "1rem",
              marginTop: "1px",
              color: "black",
            },
          }}
          sx={{ input: { color: "black" } }}
        />
      )}
    />
  );
}

export default AutoComLang;
