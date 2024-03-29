import { TextField } from "@mui/material";
interface TextProfile {
  label: string;
  error?: boolean;
  setText?: any;
  valuefield?: string;
  read: boolean;
  load:boolean;
}
function TextFieldProfile(props: TextProfile) {

  if (props.load===false) {
    return (
      <TextField
        label={props.label}
        name={props.label}
        //   error={props.error}
        variant="standard"
        style={{ marginBottom: "4px", color: "white" }}
        InputLabelProps={{
          style: {
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "100%",
            color: "white",
            textTransform:"capitalize",
          },
          shrink: true,
        }}
        required
        InputProps={{
          readOnly: props.read,
        }}
        value={props.valuefield}
        sx={{ input: { color: "white" } }}
        onChange={(e) => {
          props.setText(e);
        }}
      />
    );
  } else {
    return (
      <TextField
        label={props.label}
        name={props.label}
        //   error={props.error}
        variant="standard"
        style={{ marginBottom: "4px", color: "white" }}
        InputLabelProps={{
          style: {
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "100%",
            color: "white",
            textTransform:"capitalize",
          },
          shrink: true,
        }}
        required
        InputProps={{
          readOnly: props.read,
        }}

        sx={{ input: { color: "white" } }}
        onChange={(e) => {
          props.setText(e);
        }}
      />
    );
  }
}

export default TextFieldProfile;
