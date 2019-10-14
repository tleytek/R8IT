import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const SimpleSelect = ({ data, input, ...custom }) => {
  const [values, setValues] = React.useState({
    category: ""
  });

  const renderList = data => {
    return data.map(el => {
      return (
        <MenuItem key={el._id} value={el._id}>
          {el.verb} {el.noun}
        </MenuItem>
      );
    });
  };

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <FormControl {...custom}>
      <InputLabel htmlFor="select-simple">Category</InputLabel>
      <Select
        {...input}
        value={values.category}
        onChange={handleChange}
        inputProps={{
          name: "category",
          id: "select-simple"
        }}
      >
        {renderList(data)}
      </Select>
    </FormControl>
  );
};

export default SimpleSelect;
