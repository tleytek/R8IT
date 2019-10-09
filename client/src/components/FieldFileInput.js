import React from "react";

const renderFileInput = props => {
  // const {
  //   input: { value }
  // } = props;
  const { className } = props;

  const onChange = event => {
    event.preventDefault();
    const {
      input: { onChange }
    } = props;
    onChange(event.target.files[0]);
  };

  return (
    <input
      required
      type="file"
      accept=".jpg, .png, .jpeg"
      onChange={onChange}
      className={className}
      {...props.custom}
    />
  );
};

export default renderFileInput;
