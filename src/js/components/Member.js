import React from "react";

export default (props) => {
  return(
    <figure
    className="avatar avatar-lg tooltip tooltip-bottom"
    data-tooltip={props.member.name} >
    <img src={props.member.avatar} />
    </figure>
  );
};
