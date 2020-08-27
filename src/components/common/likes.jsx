import React from "react";

const Likes = (props) => {
  const classes = "fa fa-heart";
  return (
    <div>
      <i
        className={props.like === true ? classes : `${classes}-o`}
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
        aria-hidden="true"
      ></i>
    </div>
  );
};

export default Likes;
