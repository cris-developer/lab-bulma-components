import React from "react";
import "bulma/css/bulma.css";

const FormField = (props) => {
  return (
    <div>
      <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
          <input className="input" type={props.type} placeholder={props.placeholder}></input>
        </div>
      </div>
    </div>
  );
};

export default FormField;
