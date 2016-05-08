import React from "react";
import AppActions from "../actions/AppActions";

export default (props) => {
  return(
    <figure className="avatar avatar-lg tooltip tooltip-bottom" data-tooltip={props.member.name}>
      <img src={props.member.avatar} onClick={
        AppActions.searchAddMember.bind(null, props.member)
      } />
    </figure>
  );
};
