import { Autocomplete, Paper, TextField } from "@mui/material";
import { AutoComs, useStyles } from "./AutoComInterface";

function AutoComForm(props: AutoComs) {
  const classes = useStyles();
  if (props.load === false) {
    return (
      <Autocomplete
        disablePortal
        multiple={props.multiple}
        onChange={(ev, newValue) => {
          if (newValue) props.setState(newValue);
        }}
        classes={classes}
        id="combo-box-demo"
        sx={{
          width: "250px",
          margin: "20px 0px 0px 0px",
        }}
        options={props.data}
        getOptionLabel={props.cbsele}
        PaperComponent={({ children }) => (
          <Paper style={{ backgroundColor: "#0d143ae9", color: "white" }}>
            {children}
          </Paper>
        )}
        isOptionEqualToValue={props.cbmatch}
        defaultValue={props.defautlValue}
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
                color: "white",
              },
            }}
            sx={{ input: { color: "white" } }}
          />
        )}
      />
    );
  } else return null;
}

export default AutoComForm;
