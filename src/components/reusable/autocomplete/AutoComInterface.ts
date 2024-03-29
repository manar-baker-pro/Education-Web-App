import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: any) => ({
  root: {
    "& .MuiButtonBase-root": {
      color: "#fff",
      background: "#694b9c",
      transition: "all 0.2s ease-in",
      margin: "1px",
    },
    "&:hover .MuiButtonBase-root": {
      color: "#fff",
      background: "#684aefe9",
    },
  },
  inputRoot: {
    "&.MuiOutlinedInput-root": {
      // background: "#0d143ae9",
    },
    "&.MuiOutlinedInput-input": {
      color: "green",
    },
    "&.Mui-focused &.MuiOutlinedInput-input": {
      color: "red",
    },
  },
}));
export interface AutoComs {
  setState: any;
  multiple: boolean;
  label: string;
  cbmatch: any;
  cbsele: any;
  data: any[];
  defautlValue: any[];
  load: boolean;
}
