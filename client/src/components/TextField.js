import React from "react";
import TextField from "@material-ui/core/TextField";

const TextFields = ({ name, label, input, ...custom }) => {
  const [values, setValues] = React.useState({
    name: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <TextField
      {...custom}
      id={name}
      label={label}
      value={values.name}
      onChange={handleChange("name")}
      margin="normal"
      {...input}
    />
  );
};

export default TextFields;
