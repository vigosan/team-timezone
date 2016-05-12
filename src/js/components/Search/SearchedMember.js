import React from "react";
import AppActions from "../../actions/AppActions";

class SearchedMember extends React.Component {
  render() {
    let member = this.props.member;

    return(
      <div className="chip-sm">
        <img src={member.avatar} className="avatar" />
        <span className="chip-name">{member.name}</span>
        <button className="btn btn-clear" onClick={
          AppActions.searchRemoveMember.bind(null, member)
        }></button>
      </div>
    );
  }
}

export default SearchedMember;
