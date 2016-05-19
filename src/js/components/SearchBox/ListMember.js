import React from "react";
import AppActions from "../../actions/AppActions";

export default (props) => {
  let member = props.member;

  return(
    <li className="form-autocomplete-item" onClick={
      AppActions.searchAddMember.bind(null, member)
    }>
      <div className="chip hand">
        <div className="chip-icon">
          <img src={member.avatar} className="avatar" />
        </div>
        <div className="chip-content">
          {member.name}
        </div>
      </div>
    </li>
  );
};
