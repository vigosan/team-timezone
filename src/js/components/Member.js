import React from "react";

export default (props) => {
  let { member } = props;

  let figureClass = "avatar avatar-lg tooltip tooltip-bottom";
  if(member.isBeingSearched) { figureClass += " searched"; };
  return(
    <figure
    className={figureClass}
    data-tooltip={props.member.name} >
    <img src={props.member.avatar} />
    </figure>
  );
};
