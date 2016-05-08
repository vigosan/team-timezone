import React from "react";
import AppStore from "../stores/AppStore";
import Member from "./Member";

class Members extends React.Component {
  _getMembers() {
    return { members: AppStore.getMembers() };
  }

  componentWillMount() {
    this.setState(this._getMembers());
  }

  render() {
    let members = this.state.members.map(member => {
      return <Member key={member.id} member={member} />;
    });

    return(
      <div className="members">
        {members}
      </div>
    );
  }
}

export default Members;
