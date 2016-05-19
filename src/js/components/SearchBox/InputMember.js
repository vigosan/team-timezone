import React from "react";
import AppActions from "../../actions/AppActions";

export default (props) => {
  let member = props.member;

  return(
    <div className="chip-sm">
      <img src={member.avatar} className="avatar" />
      <span className="chip-name">{member.name}</span>
      <button className="btn btn-clear" onClick={
        AppActions.searchRemoveMember.bind(null, member)
      }></button>
    </div>
  );
};
