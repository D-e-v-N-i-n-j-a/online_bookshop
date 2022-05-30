import React from "react";

const TextBoxModel = ({placeholder,type,id,value,callBack}) => {
  return (
    <div className="wrapper">
      <div className="input-data">
        <input
          placeholder={placeholder}
          type={type}
          name="userName"
          id={id}
          value={value}
          onChange={callBack}
        />
      </div>
    </div>
  );
};

export default TextBoxModel;
