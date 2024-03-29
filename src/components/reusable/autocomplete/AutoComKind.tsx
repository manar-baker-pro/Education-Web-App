import { Autocomplete, Paper, TextField } from "@mui/material";
import { TypeSlide } from "../../adminDash/lectureAd/KindEnum";
import { useStyles } from "./AutoComInterface";
function AutoComKind(props: any) {
  const classes = useStyles();
  return (
    <Autocomplete
      options={Object.values(TypeSlide)}
      defaultValue={TypeSlide.Code}
      classes={classes}
      onChange={(_, newValue) => {
        if (newValue) props.setState(newValue, props.index);
      }}
      PaperComponent={({ children }) => (
        <Paper style={{ backgroundColor: "#8c7bf8", color: "white" }}>
          {children}
        </Paper>
      )}
      sx={{
        width: "250px",
        margin: "20px 0px 0px 0px",
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={"select type"}
          InputLabelProps={{
            style: {
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              width: "100%",
              fontSize: "1rem",
              marginTop: "4px",
              color: "#200648",
            },
          }}
          sx={{ input: { color: "#200648" } }}
        />
      )}
    />
  );
}

export default AutoComKind;
