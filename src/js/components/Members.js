import React from "react";
import AppStore from "../stores/AppStore";
import Member from "./Member";

function getMembers() {
  return { members: AppStore.getMembers() };
}

class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = getMembers();
  }

  render() {
    let members = this.state.members.map(member => {
      return <Member key={member.id} member={member} />
    });

    return(
      <div className="members">
        {members}
      </div>
    )
  }
}

export default Members;
