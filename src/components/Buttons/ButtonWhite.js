import React from "react";

const ButtonWhite = (props) => {
  return (
    <div>
      <button type="button" className="btn btn-light">
        {props.name}
      </button>
    </div>
  );
};

export default ButtonWhite;
