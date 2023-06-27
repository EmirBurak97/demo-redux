import React from "react";

const TextInput = ({ name, label, placeHolder, onChange, value, error }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>
        <div className="field">
          <input
            type="text"
            name={name}
            placeholder={placeHolder}
            onChange={onChange}
            value={value}
            className="form-control"
          >
            {error && <div className="alert alert-danger">{error}</div>}
          </input>
        </div>
      </label>
    </div>
  );
};

export default TextInput;
